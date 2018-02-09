// Settings
var rows = 9,           // Amount of texture-tiles lenghtwise
    columns = 13,       // Amount of texture-tiles heightwise
    size = 80,          // Resolution of the tiles ( pixels )
    tiles_amount = 17;  // Amount of textures in the texture texture folder

// Some variables
var cnv = document.getElementById("game"),
    ctx = cnv.getContext("2d", {antialias: true}),
    map, map_overlay, walls, start, x, y, tile_nr, tiles = [];

// Initiate the game
function map_start() {
    // Map
    start = new Date();
    ctx.canvas.width = columns * size;
    ctx.canvas.height = rows * size;
    for (var i = 0; i < tiles_amount; i++) {
        tiles[i] = new Image();
        tiles[i].src = "resources/media/" + (i + 1) + ".png";
    }
    
    // Player
    player.x = ctx.canvas.width / 2;
    player.y = ctx.canvas.height / 2;
}

// Set the textures of all tiles
function map_update() {
    for (x = 0; x < columns; x++) {
        for (y = 0; y < rows; y++) {
            tile_set(x, y);
        }
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
function player () {
    var x, y;
}

player.prototype.move = function(x, y) { // X and Y are the added positions
    // this.x += x;  // We'll have to check first if the spot we want to go
    // this.x += y;  // isn't blocked.
    
    // Keep efficiency in mind!!
    
//    if (true) {
//        
//    }
}

player.prototype.display = function() {
    ctx.ellipse(this.x, this.y, 30, 30);
}

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

map_start();
window.onload = map_update;
player.display();
console.log("Loading time:", millis(), "ms");