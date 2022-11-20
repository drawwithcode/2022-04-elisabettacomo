let bg;

function preload() {
  bg = loadImage('assets/sfondo-welcome_page.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight); //my sketch occupies the whole page

  imageMode(CENTER);

  //button 1 links to a new page
  button = createImg('./assets/freccia-1.svg'); //the button is linked to an image
  button.position(width/1.4, height/1.2); //set the position
  button.size(60, 60); //set the size
  button.style(
    "position:absolute; padding: 28px;"
  );
  button.mousePressed(goToMainPage); //set the function after the actio
}

function draw() {
  image(bg, width/2, height/2, windowWidth, windowHeight); //background

  let h1 = createElement('h1', 'Hello, <br/> are  you  ready<br/>to  show off<br/>your incredible<br/>doodle  skills?');
  h1.style('color', '#FFFFFF');
  h1.style(
    "position:absolute; padding: 16px; font-weight: 600; text-align: left;font-family:'Clash Display'; font-size:40px;"
  );
  h1.position(0, height/3.2);

  let h3 = createElement('h3', 'doodle-ish');
  h3.style('color', '#D1889C');
  h3.style(
    "position:absolute; right: 50%; font-weight: 500; padding-top: 4%; transform: translate(50%,50%); text-align: center; font-family:'Clash Display'; font-size:20px;"
  );
  h3.position(0, 0);
  
}

function goToMainPage() {
  window.open("main.html", "_self");
}


