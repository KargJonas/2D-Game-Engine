// Settings
const canvas_id = "game", // The name of HTML-Canvas element we are drawing on
  tile_columns = 24,  // Amount of texture-tiles lenghtwise
  tile_rows = 14,      // Amount of texture-tiles heightwise
  tile_size = 80,     // Resolution of the tiles ( in pixels )
  animation_speed = 50, // Speed of animation-clock ( the smaller the number - the faster )
  tile_path = "resources/tiles/",   // Path of tile-textures
  char_path = "resources/anims/",   // Path of char-tectures
  chars_amount = 16, // Amount of textures in the char-folder // !!
  tiles_amount = 32, // Amount of tile-textures ( for the map ) // !!
  update_speed = 1; // The time between refreshing map, etc..

// Game settings
var player_speed = 1;         // Don't set to 1 if you have anti-speed on diagonal movement
const show_load_time = false,   // Show how long it took to load the game in the console
  show_custom_error = true, // Show custom error messages ( Might be useful for new JS users )
  show_fps = true; // Show custom error messages ( Might be useful for new JS users )

// Custom-variables
var fullscreen_button = document.getElementById("fullscreen"),
  fullscreen_mode = true,
  fullscreen_hover = false,
  fullscreen_animaton_state = true;

var show_house = true,
  last_dash = new Date();

// Animations
animations = [
  // [posX, posY, frame1, frame2, frame3, etc..]
];

function setup() {
  // Remember to set the animation-textures amount !!!
  map1.load_map();

  player = new char();
  player.setup(520, 270);         // Params in setup is spawnpoint
  player.frames_idle = [1, 2];    // The standart-animation in idle
  player.frames_walk = [3, 4];

  farm_house = new animation();
  farm_house.setup(770, 350);
  farm_house.frame_pattern = [16];

}

function animate_update() {
  player.animate();   // Animate
  farm_house.animate();

  if (fullscreen_hover) {
    fullscreen_animaton_state = !fullscreen_animaton_state;
    if (fullscreen_mode) {
      if (fullscreen_animaton_state) {
        fullscreen_button.src = "resources/ui/max_1.png";
      } else {
        fullscreen_button.src = "resources/ui/max_2.png";
      }
    } else {
      if (fullscreen_animaton_state) {
        fullscreen_button.src = "resources/ui/min_1.png";
      } else {
        fullscreen_button.src = "resources/ui/min_2.png";
      }
    }
  } else {
    if (fullscreen_mode) {
      fullscreen_button.src = "resources/ui/max_2.png";
    } else {
      fullscreen_button.src = "resources/ui/min_2.png";
    }
  }
}

function update() {
  if (show_house) {
    farm_house.display();
  }

  // Dash
  if (key_map[16] && (millis() - last_dash > 1000 || millis() - last_dash < 300)) {
    last_dash = new Date();
    player_speed = 10;
  } else {
    player_speed = 1;
  }

  // Anti-speeding on diagonal walk
  if ((key_map[87] && (key_map[65] || key_map[68])) || (key_map[83] && (key_map[65] || key_map[68]))) {
    temp_speed = player_speed / 0.7;
  } else {
    temp_speed = player_speed;
  }

  // WASD events
  if (key_map[65]) { // A
    player.frames_walk = [7, 8];
    player.move_collider(-player_speed, 0);
  } else if (key_map[68]) { // D
    player.frames_walk = [5, 6];
    player.move_collider(player_speed, 0);
  }

  if (key_map[87]) { // W
    player.frames_walk = [9, 10];
    player.move_collider(0, -player_speed);
  } else if (key_map[83]) { // S
    player.frames_walk = [3, 4];
    player.move_collider(0, player_speed);
  }

  player.display();  // Show on screen (Should be last in order to be in front)
}

function wall_event(wall_type) { // Called when the player steps on a wall and gives the wall-type
  switch (wall_type) {
    case 2:
      show_house = false;
      player.move(1000, 860, true);
      house1.load_map();
      break;

    case 3:
      show_house = true;
      player.move(860, 500, true);
      map1.load_map();
      break;

    default:
      break;
  }
}

// Fullscreen
function toggle_fullScreen() {
  fullscreen_mode = !fullscreen_mode;
  if (fullscreen_mode) {
    fullscreen_button.src = "resources/ui/max_2.png";
  } else {
    fullscreen_button.src = "resources/ui/min_2.png";
  }
  if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
    if (document.body.requestFullScreen) {
      document.body.requestFullScreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullScreen) {
      document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}