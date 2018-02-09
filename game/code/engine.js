// Settings
var rows = 9,           // Amount of texture-tiles lenghtwise
    columns = 13,       // Amount of texture-tiles heightwise
    size = 80,          // Resolution of the tiles ( pixels )
    tiles_amount = 17;  // Amount of textures in the texture texture folder

// Game settings
var player_speed = 10;

// Some variables
var cnv = document.getElementById("game"),                      // Canvas
    ctx = cnv.getContext("2d", {antialias: true}),              // Context
    map, map_overlay, walls, start, x, y, tile_nr, tiles = [],  // Map
    player1, key_map = {}, temp_speed, temp_pos_x, temp_pos_y,  // Player
    char_offset = size / 2;

// Initiate the game
function map_start() {
    // Map
    start = new Date();
    ctx.canvas.width = columns * size;
    ctx.canvas.height = rows * size;
    for (var i = 0; i < tiles_amount; i++) {
        tiles[i] = new Image();
        tiles[i].src = "resources/tiles/" + (i + 1) + ".png";
    }

    // Player
    player1 = new player();
}

// Set the textures of all tiles
function map_update() {
    for (x = 0; x < columns; x++) {
        for (y = 0; y < rows; y++) {
            tile_set(x, y);
        }
    }
    player1.display();
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
function player () {
    this.setup = function() {
        this.x = ctx.canvas.width / 2;
        this.y = ctx.canvas.height / 2;
        this.img = new Image();
        this.img.src = "resources/chars/1.png";
    }

    this.display = function() {
        // ctx.fillRect(this.x, this.y, 30, 30);
        ctx.drawImage(this.img, this.x - char_offset, this.y - char_offset);
    }

    this.move = function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }
}

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

// Keyboard input
onkeydown = onkeyup = function(e){
    // W = 87
    // A = 65
    // S = 83
    // D = 68

    // Map multiple keys at once
    e = e || event;
    key_map[e.keyCode] = e.type == 'keydown';

    // Anti-speeding on diagonal walk
    if ((key_map[87] || key_map[83]) && (key_map[65] || key_map[68])) {
        temp_speed = player_speed / 1.5;
    } else {
        temp_speed = player_speed;
    }

    // Colision detection
    if (key_map[87]) {
        temp_pos_x = Math.floor(player1.x / size);
        temp_pos_y = Math.floor((player1.y - temp_speed) / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(0, -temp_speed);
        }
    } else if (key_map[83]) {
        temp_pos_x = Math.floor(player1.x / size);
        temp_pos_y = Math.floor((player1.y + temp_speed) / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(0, temp_speed);
        }
    }

    if (key_map[65]) {
        temp_pos_x = Math.floor((player1.x - temp_speed) / size);
        temp_pos_y = Math.floor(player1.y / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(-temp_speed, 0);
        }
    } else if (key_map[68]) {
        temp_pos_x = Math.floor((player1.x + temp_speed) / size);
        temp_pos_y = Math.floor(player1.y / size);
        if (walls[temp_pos_y][temp_pos_x] == 0) {
            player1.move(temp_speed, 0);
        }
    }

    map_update();
    player1.display();
}

map_start();
player1.setup();
window.onload = map_update;
console.log("Loading time:", millis(), "ms");