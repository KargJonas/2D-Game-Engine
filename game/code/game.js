/*  This is a (example) game file. You can create
 *  your own game files and call them whatever you
 *  want but dont forget to add the file in HTML,
 *  otherwise, the game engine won't be able to
 *  find it.
 *
 *  If you have added the engine.js to your HTML,
 *  you can take advantage of some handy features.
 *
 *  The "animate_setup" function.
 *  this function is called ONCE on load of the
 *  page. You can initiate new animations in it.
 *
 *  The "animate_update" function this is called on
 *  every update. (update rate can be set in the
 *  settings-section in engine.js)
 *
 *  You can use the "key_map[]" variable to determine
 *  which keys are pressed at any time with
 *  "key_map[your_key_num]". It will erturn true
 *  or false.
 *
 *  There is also a "move" and a "move_collider"
 *  function. With the move function you can do two
 *  things - move a object (animation or char) to
 *  a coordinate or shift it by a value:
 *
 *  yourObject.move(x, y, true); // Moves a object
 *                               // to a position.
 *
 *  yourObject.move(x, y, false); // Shifts a object
 *                                // by "x" and "y"
 *
 *  The "move_collider" function only shifts. But
 *  before it does so, it checks if the block, you
 *  want to move to is alowed to be walked on
 *  according to the "walls" array in the loaded map.
 */

// Animations
animations = [
    // [posX, posY, frame1, frame2, frame3, etc..]
    [220, 200, 9, 10],
    [800, 200, 10, 9],
    [700, 100, 9, 10],
    [750, 090, 10, 9],
    [500, 500, 9, 10]
];

function setup() {
    // Remember to set the animation-textures mount !!!
    dustAndGreen.load_map();

    player = new char();
    player.setup(520, 270);         // Params in setup is spawnpoint
    player.frames_idle = [1, 2];    // The standart-animation in idle
    player.frames_walk = [3, 4];    // A walking animation

    sheep = new char();
    sheep.setup(200, 200);
    sheep.frames_idle = [11];
    sheep.frames_walk = [12, 13];
}

function animate_update() {
    player.animate();   // Animate
    sheep.animate();
}

function update() {
    sheep.display();
    player.display();  // Show on screen (Should be last in order to be in front)

    // Anti-speeding on diagonal walk
    // if ((key_map[87] || key_map[83]) && (key_map[65] || key_map[68])) {
    if ((key_map[87] && (key_map[65] || key_map[68])) || (key_map[83] && (key_map[65] || key_map[68]))) {
        temp_speed = player_speed / 0.7;
    } else {
        temp_speed = player_speed;
    }

    // WASD events
    if (key_map[87]) { // W
        player.move_collider(0, -player_speed);
    } else if (key_map[83]) { // S
        player.move_collider(0, player_speed);
    }

    if (key_map[65]) { // A
        player.move_collider(-player_speed, 0);
    } else if (key_map[68]) { // D
        player.move_collider(player_speed, 0);
    }
}

function key_pressed(e) {
    if (e.keyCode == 32) {
        console.log("I was called only once!");
    }
}

function wall_event(wall_type) { // Called when the player steps on a wall and gives the wall-type
    switch (wall_type) {
        case 2:
            dust.load_map();
            break;
            
        case 3:
            dustAndGreen.load_map();
            break;
            
        default:
            break;
    }
}