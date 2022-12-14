let clearButton;
let canvas;

let doodleClassifier;
let resultsDiv; //just to pass the result to a HTML element

let bg;

let myColor = ("#262532");

function preload() {
  bg = loadImage('assets/sfondo-main.svg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  
  image(bg, width/2, height/2, windowWidth, windowHeight); //background

  //i need to set two arguments: in the first one i load the doodlenet pre-trained model
  //the second one is the a callback function for when the model is ready
  doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady);
  resultsDiv = createDiv('Draw here!');
  resultsDiv.style('color', '#3048A9');
  resultsDiv.style(
    "position:absolute; right: 50%; font-weight: 600; padding-top: 40%; transform: translate(50%,-50%); text-align: center; font-family:'Clash Display'; font-size:20px;"
  );
  resultsDiv.position(16, 0);

  //buttonClear links to a new page
  clearButton = createImg('./assets/freccia-3.svg'); //the button is linked to an image
  clearButton.position(width/1.4, height/1.2); //set the position
  clearButton.size(60, 60); //set the size
  clearButton.style(
    "position:absolute; padding: 28px;"
  );
  clearButton.mousePressed(clearCanvas); //set the function after the action

  //saveButton links to a new page
  saveButton = createImg('./assets/freccia-4.svg'); //the button is linked to an image
  saveButton.position(0, height/1.2); //set the position
  saveButton.size(60, 60); //set the size
  saveButton.style(
    "position:absolute; padding: 28px 22px;"
  );
  saveButton.mousePressed(saveFrame); //set the function after the actio

  //inspoButton links to a new page
  inspoButton = createImg('./assets/button-1.svg'); //the button is linked to an image
  inspoButton.position(width/2, height/1.2); //set the position
  inspoButton.size(198, 60); //set the size
  inspoButton.style(
    "position:absolute; padding: 28px; transform: translate(-50%,0px);"
  );
  inspoButton.mousePressed(goToInspo); //set the function after the actio

  //buttonBack links to a new page
  buttonBack = createImg('./assets/freccia-2.svg'); //the button is linked to an image
  buttonBack.position(0, 32); //set the position
  buttonBack.size(60, 60); //set the size
  buttonBack.style(
    "position:absolute; padding: 16px 22px;"
  );
  buttonBack.mousePressed(goToMenuPage); //set the function after the action

  //color BLUE
  push();
	let col1 = createImg("assets/blue.svg");
  col1.position(24, height/1.25); //set the position
  col1.size(40, 40); //set the size
  col1.style(
    "position:absolute; margin-bottom: 0px;"
  );
	col1.mousePressed(changeBlue);
  pop();

  //color GREEN
  push();
	let col2 = createImg("assets/green.svg");
  col2.position(24, height/1.25); //set the position
  col2.size(40, 40); //set the size
  col2.style(
    "position:absolute; margin-top: -45px;"
  );
	col2.mousePressed(changeGreen);
  pop();

  //color YELLOW
  push();
	let col3 = createImg("assets/yellow.svg");
  col3.position(24, height/1.25); //set the position
  col3.size(40, 40); //set the size
  col3.style(
    "position:absolute; margin-top: -90px;"
  );
	col3.mousePressed(changeYellow);
  pop();

  //color RED
  push();
	let col4 = createImg("assets/red.svg");
  col4.position(24, height/1.25); //set the position
  col4.size(40, 40); //set the size
  col4.style(
    "position:absolute; margin-top: -135px;"
  );
	col4.mousePressed(changeRed);
  pop();

  //color BLACK
  push();
	let col5 = createImg("assets/black.svg");
  col5.position(24, height/1.25); //set the position
  col5.size(40, 40); //set the size
  col5.style(
    "position:absolute; margin-top: -180px;"
  );
	col5.mousePressed(changeBlack);
  pop(); 
}

function clearCanvas() {
  image(bg, width/2, height/2, windowWidth, windowHeight); //background
}

//color change to BLUE
function changeBlue() {
	myColor = ("#4B7CE7");
}

//color change to GREEN
function changeGreen() {
	myColor = ("#8FD081");
}

//color change to YELLOW
function changeYellow() {
	myColor = ("#F0D16A");
}

//color change to RED
function changeRed() {
	myColor = ("#D65250");
}

//color change to BLACK
function changeBlack() {
	myColor = ("#262532");
}

//set the callback function
function modelReady() {
  //take the canvas and pass it to the model for a prediction
  doodleClassifier.classify(canvas, gotResults);
  //in this way i call the gotResult function that collects all the predictions of the doodle made in the canvas
}

function gotResults(error, results) {
  //first i set a callback function in case of an error
  if (error) {
    console.error(error);
    return; //if something went wrong, just repeat the function
  }
  //if everything got well, get the result
  //console.log(results);
  let content = `${results[0].label}`;

  resultsDiv.html('is  that... ' + content + '?'); //classify the canvas
  doodleClassifier.classify(canvas, gotResults); //show new results everytime 
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(16);
    stroke(myColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function goToMenuPage() {
  window.open("index.html", "_self");
}

function goToInspo() {
  window.open("inspo.html", "_self");
}

function saveFrame() {
  save("myDoodle.png");
}


// this prevents dragging screen around
function touchMoved() {
	return false;
}