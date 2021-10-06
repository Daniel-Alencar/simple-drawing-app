let layer;

function setup() {
  createCanvas(document.body.offsetWidth, document.body.offsetHeight);
  layer = createGraphics(width, height);
}

function draw() {
  background(30);

  if(mouseIsPressed) {
    new MyLine().show();
  }

  image(layer, 0, 0);
}