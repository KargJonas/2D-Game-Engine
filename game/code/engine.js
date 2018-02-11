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
 *  yourPlayerName.animate_walk = [3, 4];
 *
 *  The parameters in the yourPlayerName.setup
 *  function is the position, where the player
 *  will be spawned by default.
 *  The variable "yourPlayerName.animate_walk" is the array of
 *  frames used for the player-animation when walking.
 *  You can add as many as you want.
 *  The variable "yourPlayerName.animate_idle" is the array of
 *  frames used for the player-animation in idle.
 *  You can add as many as you want.
 *
 *  You have to preset some stuff in the "Settings" below.
 *  You can play around in the "Game Settings" if you wish to.
 */

// Settings
const rows = 11,                          // Amount of texture-tiles lenghtwise
      columns = 24,                       // Amount of texture-tiles heightwise
      size = 80,                          // Resolution of the tiles ( pixels )
      animation_speed = 200,              // Speed of animation-clock
      tile_path = "resources/tiles/",     // Path of tile-textures
      char_path = "resources/anims/",     // Path of char-tectures
      chars_amount = 4;                   // Amount of textures in the char-folder

// Game settings
const player_speed = 10,
      show_load_time = true,
      show_custom_error = true;

// Some variables
var cnv = document.getElementById("game"),
    ctx = cnv.getContext("2d", {antialias: true}),
    map, map_overlay, walls,
    tiles_amount,
    start, x, y,
    tile_nr, tiles = [],
    player1,
    key_map = {},
    temp_speed, temp_pos_x, temp_pos_y,
    animate_idle,
    char_offset = size / 2,
    animation_frame = 0,
    walk_frame = 0, walk_last,
    key;

// Initiate the game
function map_start() {
    start = new Date(); // Has to be first to execute
    // tiles_amount = require('fs').readdir(tile_path, (err, files) => { return files.length });
    // chars_amount = require('fs').readdir(char_path, (err, files) => { return files.length });
    tiles_amount = Math.max(...([].concat([].concat(...map), [].concat(...map_overlay)))); // Get the amount of textures
    // chars_amount = Math.max(...([].concat([].concat(...animate_idle), [].concat(...animate_walk)))); 
    ctx.canvas.width = columns * size;
    ctx.canvas.height = rows * size;
    for (var i = 0; i < tiles_amount; i++) {
        tiles[i] = new Image();
        tiles[i].src = tile_path + (i + 1) + ".png";
    }

    // Set up characters/animations
    if (typeof animate_setup === "function") { animate_setup(); }
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

// Player
function animation () {
    this.frame = 0;
    this.imgs = [];
    this.animate_idle = [];
    this.animate_walk = [];

    this.setup = function(x, y) {
        this.x = x;
        this.y = y;

        for (var i = 0; i < chars_amount; i++) {
            this.imgs[i] = new Image();
            this.imgs[i].src = char_path + (i + 1) + ".png";
        }
    }

    this.animate = function() {
        this.frame++;
        if (this.frame > this.animate_idle.length - 1) { this.frame = 0; }
    }

    this.display = function() {
        if (millis() - walk_last < 300) {
            ctx.drawImage(this.imgs[this.animate_walk[this.frame] - 1], this.x - char_offset, this.y - char_offset);
        } else {
            ctx.drawImage(this.imgs[this.animate_idle[this.frame] - 1], this.x - char_offset, this.y - char_offset);
        }
    }

    this.move = function(x, y) {
        this.x = parseInt(this.x + x);
        this.y = parseInt(this.y + y);
        walk_last = millis();
    }
}

// *** Keyboard input ***
//onkeydown = function(e) {
//    
//}
//
//onkeyup = function(e) {
//    
//}

onkeydown = onkeyup = function(e) {
    key = e;
    walk_frame++;
    e = e || event;
    key_map[e.keyCode] = e.type == 'keydown';

    // Anti-speeding on diagonal walk
    if ((key_map[87] || key_map[83]) && (key_map[65] || key_map[68])) {
        temp_speed = player_speed / 1.5;
    } else {
        temp_speed = player_speed;
    }

    // Colision detection
    if (key_map[87]) { // W
        temp_pos_x = Math.floor(player1.x / size);
        temp_pos_y = Math.floor((player1.y - temp_speed) / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(0, -temp_speed);
        }
    } else if (key_map[83]) { // A
        temp_pos_x = Math.floor(player1.x / size);
        temp_pos_y = Math.floor((player1.y + temp_speed) / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(0, temp_speed);
        }
    }

    if (key_map[65]) { // S
        temp_pos_x = Math.floor((player1.x - temp_speed) / size);
        temp_pos_y = Math.floor(player1.y / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(-temp_speed, 0);
        }
    } else if (key_map[68]) { // D
        temp_pos_x = Math.floor((player1.x + temp_speed) / size);
        temp_pos_y = Math.floor(player1.y / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(temp_speed, 0);
        }
    }
    map_update();
}

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

map_start();
window.onload = map_update;
if (show_load_time) { console.log("Loading time:", millis(), "ms"); }
setInterval(map_update, animation_speed);