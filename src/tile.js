class Tile {
  constructor(width, height) {
    this.color = "#000";
    this.x = 0;
    this.y = 0;
    this.width = width/4;
    this.height = height/4;
  }
  
  draw(z1, z2, context) {
    context.fillStyle = this.color;
    context.fillRect(z1 * this.width, z2 * this.height, this.width, this.height);
  }

  update(t1, t2, t3, t4, context) {
    t4 = t3;
    t3 = t2;
    t2 = t1;
    t1 = Math.floor(Math.random() * 4);
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawLines();
    draw(t1, 0);
    draw(t2, 1);
    draw(t3, 2);
    draw(t4, 3);
  }

}

function drawLines(context) {
  context.beginPath();
  // Vertical Lines
  for (let i = 1; i < 4; i++) {
    context.moveTo(i * CANVAS_WIDTH / 4, 0);
    context.lineTo(i * CANVAS_WIDTH / 4, CANVAS_HEIGHT);
  }

  // Horizontal Lines
  for (let i = 1; i < 4; i++) {
    context.moveTo(0, i * CANVAS_HEIGHT / 4);
    context.lineTo(CANVAS_WIDTH, i * CANVAS_HEIGHT / 4);
  }
  context.stroke();
}

export default Tile;