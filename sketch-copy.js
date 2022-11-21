let clearButton;
let canvas;

let bg;

let myInspo = 0;

let myColor = ("#262532");

function preload() {
  bg = loadImage('assets/sfondo-main.svg');
  inspo0 = loadImage('assets/inspo/inspo-0.svg');
  inspo1 = loadImage('assets/inspo/inspo-1.svg');
  inspo2 = loadImage('assets/inspo/inspo-2.svg');
  inspo3 = loadImage('assets/inspo/inspo-3.svg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  setMoveThreshold(2);

  image(bg, width/2, height/2, windowWidth, windowHeight); //background

  resultsDiv = createDiv('Shake!');
  resultsDiv.style('color', '#3048A9');
  resultsDiv.style(
    "position:absolute; right: 50%; font-weight: 600; padding-top: 40%; transform: translate(50%,-50%); text-align: center; font-family:'Clash Display'; font-size:20px;"
  );
  resultsDiv.position(16, 0);

  traceDiv = createDiv('and trace  the  doodle');
  traceDiv.style('color', '#DBD0CD');
  traceDiv.style(
    "position:absolute; right: 50%; font-weight: 600; padding-top: 50%; transform: translate(50%,-50%); text-align: center; font-family:'Clash Display'; font-size:16px;"
  );
  traceDiv.position(16, 0);

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
  inspoButton = createImg('./assets/button-2.svg'); //the button is linked to an image
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

function deviceShaken() {
  myInspo+=1;

  if (myInspo === 1) {
    image(inspo0, width/2, height/2, windowWidth, windowHeight);
  }
  if (myInspo === 2) {
    image(inspo1, width/2, height/2, windowWidth, windowHeight);
  } else if (myInspo === 3) {
    image(inspo2, width/2, height/2, windowWidth, windowHeight);
  } else if (myInspo === 4) {
    image(inspo3, width/2, height/2, windowWidth, windowHeight);
  } else if (myInspo >= 4) {
    myInspo=0;
  }
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
  window.open("main.html", "_self");
}

function saveFrame() {
  save("myDoodle.png");
}


// this prevents dragging screen around
function touchMoved() {
	return false;
}

// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}
