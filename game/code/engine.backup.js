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
var tileElems = [ "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10" ],
    tiles = [];

//var tile1 = document.getElementById("t1"),
//    tile2 = document.getElementById("t2"),
//    tile3 = document.getElementById("t3"),
//    tile4 = document.getElementById("t4"),
//    tile5 = document.getElementById("t5"),
//    tile6 = document.getElementById("t6"),
//    tile7 = document.getElementById("t7"),
//    tile8 = document.getElementById("t8"),
//    tile9 = document.getElementById("t9"),
//    tile10 = document.getElementById("t10");

function map_start() {
    start = new Date();
    for (var i = 0; i < tileElems.length; i++) {
        tiles[i] = document.getElementById[tileElems[i]];
    }
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
    ctx.drawImage(tiles[tile_nr + 1], x * size, y * size);
    // tile_draw(tile_nr);

    tile_nr = map_overlay[y][x]; // Get the tile-overlay-nr
    ctx.drawImage(tiles[tile_nr + 1], x * size, y * size);
    // tile_draw(tile_nr);
}

function tile_draw(tile_nr) {
    ctx.drawImage(tiles[tile_nr + 1], x * size, y * size);
//    switch(tile_nr) {
//        case 0:
//            break;
//
//        case 1:
//            ctx.drawImage(tile1, x * size, y * size);
//            break;
//
//        case 2:
//            ctx.drawImage(tile2, x * size, y * size);
//            break;
//
//        case 3:
//            ctx.drawImage(tile3, x * size, y * size);
//            break;
//
//        case 4:
//            ctx.drawImage(tile4, x * size, y * size);
//            break;
//
//        case 5:
//            ctx.drawImage(tile5, x * size, y * size);
//            break;
//
//        case 6:
//            ctx.drawImage(tile6, x * size, y * size);
//            break;
//
//        case 7:
//            ctx.drawImage(tile7, x * size, y * size);
//            break;
//
//        case 8:
//            ctx.drawImage(tile8, x * size, y * size);
//            break;
//
//        case 9:
//            ctx.drawImage(tile9, x * size, y * size);
//            break;
//
//        case 10:
//            ctx.drawImage(tile10, x * size, y * size);
//            break;
//
//        default:
//            console.log("Unknown tile-number on x:", x, "y:", y);
//            break;
//    }
}

function millis() {
    return new Date() - start;
}

map_start();
map_update();