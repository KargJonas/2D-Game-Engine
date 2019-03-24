function maps_setup() {
  map1 = new map_template();
  house1 = new map_template();

  // ** DUST AND GREEN **
  map1.map = [
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// A
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// B
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// C
      [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// D
      [02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01],// E
      [02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01],// F
      [02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01],// G
      [02, 01, 01, 02, 02, 02, 01, 01, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01],// H
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02, 02, 02],// I
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02],// J
      [01, 01, 01, 01, 01, 01, 21, 22, 21, 22, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// K
      [01, 01, 01, 01, 01, 21, 22, 21, 22, 21, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// L
      [01, 01, 01, 01, 21, 22, 21, 22, 21, 22, 21, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// M
      [01, 01, 01, 01, 22, 21, 22, 21, 22, 21, 22, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01]//  N
    ],
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// A
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// B
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// C
      [02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// D
      [02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01],// E
      [02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 01],// F
      [02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01, 01],// G
      [02, 01, 01, 02, 02, 02, 01, 01, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 02, 01, 01, 01, 01],// H
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02, 02, 02],// I
      [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 02, 02, 02, 02, 02, 02],// J
      [01, 01, 01, 01, 01, 01, 22, 21, 22, 21, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// K
      [01, 01, 01, 01, 01, 22, 21, 22, 21, 22, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// L
      [01, 01, 01, 01, 22, 21, 22, 21, 22, 21, 22, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// M
      [01, 01, 01, 01, 21, 22, 21, 22, 21, 22, 21, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01]//  N
    ]
  ];

  map1.map_overlay = [
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 15, 00, 00],// A
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 17, 00, 00, 00, 15],// B
      [00, 15, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 15],// C
      [07, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// D
      [13, 07, 00, 00, 00, 15, 00, 00, 00, 00, 00, 00, 00, 17, 00, 00, 00, 00, 00, 15, 00, 10, 07, 00],// E
      [00, 13, 03, 03, 03, 03, 03, 03, 03, 07, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 09, 08, 00],// F
      [14, 04, 04, 11, 00, 14, 04, 04, 11, 13, 03, 03, 03, 03, 03, 03, 03, 03, 07, 00, 00, 00, 00, 00],// G
      [08, 15, 00, 09, 04, 08, 00, 00, 09, 04, 04, 04, 04, 04, 04, 04, 11, 00, 13, 07, 00, 00, 00, 00],// H
      [15, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 15, 00, 00, 09, 04, 11, 13, 03, 03, 03, 03],// I
      [17, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 09, 04, 04, 04, 04, 04],// J
      [01, 17, 01, 00, 00, 00, 10, 03, 03, 07, 00, 00, 00, 00, 00, 00, 00, 17, 00, 00, 00, 00, 00, 00],// K
      [18, 16, 01, 00, 00, 10, 12, 00, 00, 06, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00],// L
      [01, 01, 15, 00, 10, 12, 00, 00, 00, 13, 07, 15, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// M
      [15, 16, 01, 15, 12, 00, 00, 00, 00, 00, 06, 00, 00, 00, 00, 00, 15, 00, 00, 00, 00, 00, 00, 00]//  N
    ]
  ];

  map1.walls = [
    //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
    [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01],// A
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// B
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// C
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// D
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// E
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 02, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// F
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// G
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// H
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// I
    [01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// J
    [01, 00, 00, 00, 00, 00, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// K
    [01, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// L
    [01, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01],// M
    [01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01]//  N
  ];



  // ** House 1 **
  house1.map = [
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// A
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// B
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// C
      [23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 23, 23, 23, 23, 23, 23],// D
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// E
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// F
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// G
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// H
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// I
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// J
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// K
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 30, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// L
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// M
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]//  N
    ],
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// A
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// B
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// C
      [23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 23, 23, 23, 23, 23, 23],// D
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// E
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// F
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// G
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// H
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// I
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// J
      [23, 23, 23, 23, 23, 23, 23, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 23, 23, 23, 23, 23, 23],// K
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 30, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// L
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],// M
      [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]//  N
    ]
  ];

  house1.map_overlay = [
    [
      //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// A
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// B
      [00, 00, 00, 00, 00, 00, 00, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 00, 00, 00, 00, 00, 00],// C
      [00, 00, 00, 00, 00, 00, 00, 29, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// D
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// E
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// F
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// G
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// H
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// I
      [00, 00, 00, 00, 00, 00, 00, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 00, 00, 00, 00, 00, 00],// J
      [00, 00, 00, 00, 00, 00, 00, 31, 28, 28, 28, 28, 00, 28, 28, 28, 28, 32, 00, 00, 00, 00, 00, 00],// K
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 25, 28, 26, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// L
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// M
      [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]//  N
    ]
  ];

  house1.walls = [
    //A  B   C   D   E   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// A
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// B
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// C
    [00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00],// D
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// E
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// F
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// G
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// H
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// I
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 00, 00, 00],// J
    [00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 01, 01, 00, 01, 01, 01, 01, 01, 00, 00, 00, 00, 00, 00],// K
    [00, 00, 00, 00, 00, 00, 00, 01, 00, 00, 00, 01, 03, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// L
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],// M
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]//  N
  ];
}