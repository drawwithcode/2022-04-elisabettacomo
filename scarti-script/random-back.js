// // VARIABLES FOR THE RANDOM IMAGE PICKER
// let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
// let numCards = 4;
// var toggle_loop = false;
// let bg;

// function preload() {

//   bg = loadImage('assets/sfondo-main.svg');
//   //store images  by using a for loop and concatenation
//   //i rename all my images using the same scheme: pers + 0,1,2... + .png
//   for (let i = 0; i < numCards; i++) {
//       cards[i] = loadImage("./assets/inspo/inspo-" + i + '.svg');
//   }
  
// }

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   noLoop();
//   imageMode(CENTER);
//   image(bg, width/2, height/2, windowWidth, windowHeight); //background
// }

// function draw() {
//   noStroke();
//   circle(200, 200, 50);
// }

// function mousePressed() {
//   if (toggle_loop) {
//     noLoop();
//     toggle_loop = false;
//   } else {
//     //draw the random images
//     //condition: if my general variable "stopRunningDraw" is 0, draw a random image (randoImg) picked from the array "cards"
//      //setting the variable "randoImg" that corresponds to the array "cards"
//      loop();
//      toggle_loop = true;
//      let randoImg = random(cards);
//      image(randoImg, width/2, height/2, windowWidth, windowHeight); //draw "randoImg" 
//    }
// }