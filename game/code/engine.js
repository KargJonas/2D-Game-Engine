/*  A 2D-Game-library by Jonas Karg 2018
 *
 *  This library was designed for top-down
 *  games but it can be used for a lot of
 *  different stuff (e.g.P platformers, etc..)
 *
 *  It provides the ability to load maps from
 *  2-dimensional arrays ("map" and "map_overlay")
 *  with the numbers of the corresponding images
 *  in folders, you specefy. The map is then
 *  loaded into a grid of "tiles". Its possible
 *  to have multiple layers of texture.
 *
 *  The textures in the texture-folders have to
 *  be named cronologically in numbers.
 *  (e.g.: 1.png, 2.png, 3.png, ...)
 *  No number should be skippen otherwise an
 *  error will occur.
 *
 *  In the "walls" array you can say, which
 *  "tiles" are able to be passed by the
 *  player. ("00" for passable "01" for
 *  non-passable) (Collider)
 *
 *  players, characters and NPCs can be created
 *  with the following code:
 *  
 *  yourPlayerName = new player();
 *  yourPlayerName.setup(ctx.canvas.width / 2, ctx.canvas.height / 2);
 *  yourPlayerName.frames_walk = [3, 4];
 *
 *  The parameters in the yourPlayerName.setup
 *  function is the position, where the player
 *  will be spawned by default.
 *  The variable "yourPlayerName.frames_walk" is the array of
 *  frames used for the player-animation when walking.
 *  You can add as many as you want.
 *  The variable "yourPlayerName.frames_idle" is the array of
 *  frames used for the player-animation in idle.
 *  You can add as many as you want.
 *
 *  You have to preset some stuff in the "Settings" below.
 *  You can play around in the "Game Settings" if you wish to.
 */

// Settings
const rows = 9,                          // Amount of texture-tiles lenghtwise
      columns = 13,                       // Amount of texture-tiles heightwise
      size = 80,                          // Resolution of the tiles ( pixels )
      animation_speed = 200,              // Speed of animation-clock
      tile_path = "resources/tiles/",     // Path of tile-textures
      char_path = "resources/anims/",     // Path of char-tectures
      chars_amount = 6;                   // Amount of textures in the char-folder

// Game settings
const player_speed = 10,
      show_load_time = false,
      show_custom_error = true;

// Some variables
var cnv = document.getElementById("game"),
    ctx = cnv.getContext("2d", {antialias: true}),
    map, map_animations, map_overlay, walls,
    tiles_amount,
    start, x, y,
    tile_nr, tiles = [],
    player1,
    key_map = {},
    temp_speed, temp_pos_x, temp_pos_y,
    frames_idle,
    char_offset = size / 2,
    animation_frame = 0,
    walk_frame = 0, walk_last,
    key, animations, anims = [];

// Initiate the game
function map_start() {
    start = new Date(); // Has to be first to executes
    tiles_amount = Math.max(...([].concat([].concat(...map), [].concat(...map_overlay)))); // Get the amount of textures
    ctx.canvas.width = columns * size;
    ctx.canvas.height = rows * size;
    for (var i = 0; i < tiles_amount; i++) {
        tiles[i] = new Image();
        tiles[i].src = tile_path + (i + 1) + ".png";
    }
    // Set up characters/animations
    if (typeof animate_setup === "function") {
        // Setting up animations
        for (var i = 0; i < animations.length; i++) {
            anims[i] = new animation();
            anims[i].setup(animations[i][0], animations[i][1]);
            for (var a = 0; a < animations[i].length - 2; a++) {
                anims[i].frame_pattern[a] = animations[i][a + 2];
            }
        }
        // Chars need to be done by the user
        animate_setup();
    }
}

// Set the textures of all tiles
function map_update() {
    for (x = 0; x < columns; x++) {
        for (y = 0; y < rows; y++) {
            tile_set(x, y);
        }
    }
    // Update animations
    if (typeof animate_update === "function") {
        animate_update();
    }
}

// Set the texture of a tile
function tile_set(x, y) {
    tile_nr = map[y][x];
    if (tile_nr > 0 && tile_nr < tiles_amount + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * size, y * size);
    }
    tile_nr = map_overlay[y][x];
    if (tile_nr > 0 && tile_nr < tiles_amount + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * size, y * size);
    }
}

// Char-Animations
function char() {
    this.idle_frame = 0;
    this.walk_frame = 0;
    this.frames_idle = [];
    this.frames_walk = [];
    this.imgs = [];
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
        if (millis() - walk_last < 300) {
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
        walk_last = millis();  // for walk animation
    }
    // Colision detection
    this.move_collider = function(x, y) {
        temp_pos_x = Math.floor((this.x + x) / size);
        temp_pos_y = Math.floor((this.y + y) / size);
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

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

map_start();
window.onload = map_update;
if (show_load_time) { console.log("Loading-time:", millis(), "ms"); }
setInterval(map_update, animation_speed);