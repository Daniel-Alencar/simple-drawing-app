let lines = [];

function setup() {
  createCanvas(document.body.offsetWidth, document.body.offsetHeight);
}

function draw() {
  background(30);

  if(mouseIsPressed) {
    let line = new MyLine();
    lines.push(line);
  }

  for(let line of lines) {
    line.show();
  }
}