class MyLine {
  constructor() {
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;
  }
  show() {
    layer.stroke(255);
    layer.line(this.px, this.py, this.x, this.y);
  }
}