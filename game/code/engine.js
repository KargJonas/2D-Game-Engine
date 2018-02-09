// Settings
var rows = 9,           // Amount of texture-tiles lenghtwise
    columns = 13,       // Amount of texture-tiles heightwise
    size = 80,          // Resolution of the tiles ( pixels )
    tiles_amount = 17;  // Amount of textures in the texture texture folder

// Some variables
var cnv = document.getElementById("game"),                      // Canvas
    ctx = cnv.getContext("2d", {antialias: true}),              // Context
    map, map_overlay, walls, start, x, y, tile_nr, tiles = [],  // Map
    player1;                                                    // Player

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
    this.x = ctx.canvas.width / 2;
    this.y = ctx.canvas.height / 2;

    this.display = function() {
        ctx.fillRect(this.x, this.y, 30, 30);
    }

    this.move = function() {
        // this.x += x;  // We'll have to check first if the spot we want to go
        // this.y += y;  // isn't blocked
        // Keep efficiency in mind!!
        this.x += x;
        this.y += y;
    }
}

// Get time passed ( milliseconds )
function millis() { return new Date() - start; }

// Keyboard input
document.addEventListener('keydown', function(event) {
    // W = 87
    // A = 65
    // S = 83
    // D = 68
    // console.log(event.keyCode, "was pressed");

    switch (event.keyCode) {
        case 87:
            console.log(event.keyCode, "was pressed");
            player1.move(0, -1);
            break;

        case 65:
            console.log(event.keyCode, "was pressed");
            player1.move(-1, 0);
            break;

        case 83:
            console.log(event.keyCode, "was pressed");
            player1.move(0, 1);
            break;

        case 68:
            console.log(event.keyCode, "was pressed");
            player1.move(1, 0);
            break;
    }
    map_update();
    player1.display();
});

map_start();
window.onload = map_update;
console.log("Loading time:", millis(), "ms");