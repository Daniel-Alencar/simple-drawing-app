let layer;

function setup() {
  createCanvas(document.body.offsetWidth - 100, document.body.offsetHeight - 100);
  layer = createGraphics(width, height);
}

function draw() {
  background(30);

  if(mouseIsPressed) {
    new MyLine().show();
  }

  image(layer, 0, 0);
}