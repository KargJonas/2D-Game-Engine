/*  A 2D-Game-library by Jonas Karg ( Project initiated on 4 February 2018 )
 *
 *  This library is opensource and can be used by anyone altought I'd
 *  appreciate a shoutout  :D
 */

// Settings
const canvas_id = "game", // The name of HTML-Canvas element we are drawing on
      tile_rows = 9,      // Amount of texture-tiles lenghtwise
      tile_columns = 13,  // Amount of texture-tiles heightwise
      tile_size = 80,     // Resolution of the tiles ( in pixels )
      animation_speed = 50, // Speed of animation-clock ( the smaller the number - the faster )
      tile_path = "resources/tiles/",   // Path of tile-textures
      char_path = "resources/anims/",   // Path of char-tectures
      chars_amount = 9, // Amount of textures in the char-folder
      update_speed = 1; // The time between refreshing map, etc..

// Game settings
const player_speed = 2,         // Don't set to 1 if you have anti-speed on diagonal movement
      show_load_time = false,   // Show how long it took to load the game in the console
      show_custom_error = true; // Show custom error messages ( Might be useful for new JS users )

// Some variables
var cnv = document.getElementById("game"),         // Getting the HTML-Canvas element
    ctx = cnv.getContext("2d", {antialias: true}), // Createing a 2D contect for the canvas
    map = [],     // A 2-dimensional array of all tiles on the map ( set in maps.js on load in map_start() )
    map_overlay,  // A 2-dimensional array of all overlay-tiles    ( set in maps.js on load in map_start() )
    walls,        // A 2-dimensional array of all walls of the map ( set in maps.js on load in map_start() )
    animations,   // A multi-dimensional array with information of all static animations ( set in your game file (game.js) )
    anims = [],   // A multi-dimensional array with the frames of all static animations  ( set in automatically )
    tiles_amount, // Amount of textures            ( set automatically on run of map_start() in engine.js )
    start,        // The time on start of the game ( set automatically on run of map_start() in engine.js )
    tiles = [],   // Array of texture-images       ( set automatically on load in engine.js )
    key_map = {}, // Array of all keys pressed     ( set automatically on keypress in engine.js )
    frame = 0,    // Framecount ( set in the setInterval function in engine.js )
    char_offset = tile_size / 2; // The offset chars are shifted by to center them

// Initiate the game
function map_start() {
    start = new Date(); // Has to be first to execute
    maps_setup(); // Sets up the map-objects ( in maps.js )
    setup();
    tiles_amount = Math.max(...([].concat([].concat(...map),
                                          [].concat(...map_overlay)))); // Get the amount of textures for the map
    ctx.canvas.width = tile_columns * tile_size;
    ctx.canvas.height = tile_rows * tile_size;
    for (var i = 0; i < tiles_amount; i++) {
        tiles[i] = new Image();
        tiles[i].src = tile_path + (i + 1) + ".png";
    }
    // Set up characters/animations
    if (typeof setup === "function") {
        // Setting up animations
        for (var i = 0; i < animations.length; i++) {
            anims[i] = new animation();
            anims[i].setup(animations[i][0], animations[i][1]);
            for (var a = 0; a < animations[i].length - 2; a++) {
                anims[i].frame_pattern[a] = animations[i][a + 2];
            }
        }
    } else {
        console.log("Error: No setup() function found.");
    }
}

// Set the textures of all tiles
function map_update() {
    for (x = 0; x < tile_columns; x++) {
        for (y = 0; y < tile_rows; y++) {
            tile_set(x, y);
        }
    }
    // Update animations
    for (var i = 0; i < animations.length; i++) {
        anims[i].display();
    }
    update();
}

// Set the texture of a tile
function tile_set(x, y) {
    tile_nr = map[y][x];
    if (tile_nr > 0 && tile_nr < tiles_amount + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * tile_size, y * tile_size);
    }
    tile_nr = map_overlay[y][x];
    if (tile_nr > 0 && tile_nr < tiles_amount + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * tile_size, y * tile_size);
    }
}

function map_template() {
    this.map = [];
    this.map_overlay = [];
    this.walls = [];

    this.load_map = function() {
        map = this.map;
        map_overlay = this.map_overlay;
        map_animations = this.map_animations;
        walls = this.walls;
    }
}

// Char-Class
function char() {
    this.idle_frame = 0;
    this.walk_frame = 0;
    this.frames_idle = [];
    this.frames_walk = [];
    this.imgs = [];
    this.last_walk;
    this.setup = function(x, y) {
        this.x = x;
        this.y = y;

        for (var i = 0; i < chars_amount; i++) {
            this.imgs[i] = new Image();
            this.imgs[i].src = char_path + (i + 1) + ".png";
        }
    }
    this.animate = function() {
        this.idle_frame++;
        this.walk_frame++;
        if (this.idle_frame > this.frames_idle.length - 1) { this.idle_frame = 0; }
        if (this.walk_frame > this.frames_walk.length - 1) { this.walk_frame = 0; }
    }
    this.display = function() {
        if (millis() - this.last_walk < 300) {
            ctx.drawImage(this.imgs[this.frames_walk[this.walk_frame] - 1], this.x - char_offset, this.y - char_offset);
        } else {
            ctx.drawImage(this.imgs[this.frames_idle[this.idle_frame] - 1], this.x - char_offset, this.y - char_offset);
        }
    }
    // Movement
    this.move = function(x, y, mode) {
        if (mode) {
            this.x = parseInt(x);  // gotta be int otherwise, the image could be
            this.y = parseInt(y);  // displayed on half a pixel => blurred image
        } else {
            this.x = parseInt(this.x + x);
            this.y = parseInt(this.y + y);
        }
        this.last_walk = millis();  // for walk animation
    }
    // Colision detection
    this.move_collider = function(x, y) {
        temp_pos_x = Math.floor((this.x + x) / tile_size);
        temp_pos_y = Math.floor((this.y + y) / tile_size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            this.move(x, y, false);
        }
    }
}

// Animation
function animation () {
    this.frame = 0;
    this.frames = [];
    this.frame_pattern = [];
    this.setup = function(x, y) {
        this.x = x;
        this.y = y;
        for (var i = 0; i < chars_amount; i++) {
            this.frames[i] = new Image();
            this.frames[i].src = char_path + (i + 1) + ".png";
        }
    }
    this.animate = function() {
        this.frame++;
        if (this.frame > this.frame_pattern.length - 1) { this.frame = 0; }
    }
    this.display = function() {
        ctx.drawImage(this.frames[this.frame_pattern[this.frame] - 1], this.x, this.y);
    }
}

// ** Keyevents ( W, A, S, D ) **
onkeypress = function() {
    onkeydown = function(e) {
        key_map[e.keyCode] = true; // RAM inefficient..
    }
    onkeyup = function(e) {
        key_map[e.keyCode] = false;
    }
}

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

// Call user map-setup
map_start();
window.onload = map_update;
if (show_load_time) {
    console.log("Loading-time:", millis(), "ms");
}

setInterval(function() {
    frame++;
    map_update();

    if (frame % animation_speed == 0) {
        for (var i = 0; i < animations.length; i++) {
            animate_update();
            anims[i].animate();
        }
    }
}, update_speed);