// Some variables
var cnv = document.getElementById("game"),
    ctx = cnv.getContext("2d", {antialias: true}),
    rows = 9, cols = 13, // Amount of rows and columns in the map
    size = 80, // Size of each texture element
    map, map_overlay,
    start;

// Temp
var x, y,
    tile_nr;

// Map Tiles
var tile_elems = [ "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17" ],
    tiles = [];

function map_start() {
    start = new Date();
    ctx.canvas.width = cols * size;
    ctx.canvas.height = rows * size;
    for (var i = 0; i < tile_elems.length; i++) {
        tiles[i] = document.getElementById(tile_elems[i]);
    }
    map_update();
}

function map_update() {
    for (x = 0; x < cols; x++) {
        for (y = 0; y < rows; y++) {
            tile_set(x, y);
        }
    }
}

function tile_set(x, y) {
    tile_nr = map[y][x]; // Get the tile-nr
    if (tile_nr > 0 && tile_nr < tile_elems.length + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * size, y * size);
    }
    
    tile_nr = map_overlay[y][x]; // Get the tile-overlay-nr
    if (tile_nr > 0 && tile_nr < tile_elems.length + 1) {
        ctx.drawImage(tiles[tile_nr - 1], x * size, y * size);
    }
}

function millis() {
    return new Date() - start;
}

map_start();