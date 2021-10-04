let rects = [];
let cols;
let rows;
let resolution = 10;

class MyRect {
  constructor() {
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;
  }
  show() {
    let PX = this.px - (this.px % resolution);
    let PY = this.py - (this.py % resolution);
    stroke(0);
    fill(255);
    rect(PX, PY, resolution, resolution);

    let X = this.x - (this.x % resolution);
    let Y = this.y - (this.y % resolution);
    stroke(0);
    fill(255);
    rect(X, Y, resolution, resolution);
  }
}

function setup() {
  createCanvas(400, 500);
  cols = width / resolution;
  rows = height / resolution;
}

function draw() {
  background(0);

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      fill(0);
      stroke(255);
      rect(x, y, resolution - 1, resolution - 1);
    }
  }

  if(mouseIsPressed) {
    let rect = new MyRect();
    rects.push(rect);
  }

  for(let rect of rects) {
    rect.show();
  }
}