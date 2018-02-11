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
 *  The "onkeypress" function is called when a key
 *  has been pressed. If you have to detect multiple
 *  keys pressed at once, you can use the "key_map[]"
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

function animate_setup() {
    player1 = new animation();
    player1.setup(ctx.canvas.width / 2, ctx.canvas.height / 2);
    player1.animate_idle = [1, 2];   // The standart-animation in idle
    player1.animate_walk = [3, 4];   // A walking animation
}

function animate_update() {
    player1.animate();  // Animate
    player1.display();  // Show on screen
}

function move_collider() {
    
}

// Multiple keypresses
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

    // WASD events
    if (key_map[87]) { // W
        player1.move_collider(0, -temp_speed);
    } else if (key_map[83]) { // A
        player1.move_collider(0, temp_speed);
    }
    
    if (key_map[65]) { // S
        player1.move_collider(-temp_speed, 0);
    } else if (key_map[68]) { // D
        player1.move_collider(temp_speed, 0);
    }
    map_update();
}

// Single keypress
// onkeypress = function(e) {
//     console.log("Keycode:", e.keyCode);
//     console.log("Keycode:", e);
// }