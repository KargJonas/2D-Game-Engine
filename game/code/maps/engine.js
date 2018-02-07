// Some variables
var cnv = document.getElementById("game"),
    ctx = cnv.getContext("2d", {antialias: true}),
    rows = 9, cols = 13, // Amount of rows and columns in the map
    size = 80, // Size of each texture element
    map,
    map_overlay;

// Temp
var x, y,
    tile_nr;

// Map Tiles
var tile1 = document.getElementById("t1"),
    tile2 = document.getElementById("t2"),
    tile3 = document.getElementById("t3"),
    tile4 = document.getElementById("t4");

function map_update () {
    for (x = 0; x < cols; x++) {
        for (y = 0; y < rows; y++) {
            tile_draw(x, y);
        }
    }
}

function tile_draw (x, y) {
    tile_nr = map[y][x]; // Get the tile-nr
    draw_tile(tile_nr);

    tile_nr = map_overlay[y][x]; // Get the tile-overlay-nr
    draw_tile(tile_nr);
}

function draw_tile(tile_nr) {
    switch(tile_nr) {
        case 0:
            break;

        case 1:
            ctx.drawImage(tile1, x * size, y * size);
            break;

        case 2:
            ctx.drawImage(tile2, x * size, y * size);
            break;

        case 3:
            ctx.drawImage(tile3, x * size, y * size);
            break;

        case 4:
            ctx.drawImage(tile4, x * size, y * size);
            break;

        default:
            console.log("Unknown tile-number on x:", x, "y:", y);
            break;
    }
}

map_update();