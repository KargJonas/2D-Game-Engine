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
    [220, 200, 5, 6],
    [800, 200, 6, 5],
    [700, 100, 5, 6],
    [750, 090, 6, 5],
    [500, 500, 5, 6]
];

function setup() {
    // Remember to set the animation-textures mount !!!
    dustAndGreen.load_map();

    player = new char();
    player.setup(520, 270);
    player.frames_idle = [1, 2];   // The standart-animation in idle
    player.frames_walk = [3, 4];   // A walking animation

    sheep = new char();
    sheep.setup(200, 200);
    sheep.frames_idle = [7];
    sheep.frames_walk = [8, 9];
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
    //     temp_speed = player_speed / 1.02;
    // } else {
    //     temp_speed = player_speed;
    // }

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