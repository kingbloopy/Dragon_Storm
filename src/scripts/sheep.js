import MovingObject from "./moving_object";

const sheep1 = new Image();
sheep1.src = "./assets/objects/sheeps1.png";
const sheep2 = new Image();
sheep2.src = "./assets/objects/sheeps2.png";

const sheepChoices = [sheep1, sheep2];

class Sheep extends MovingObject {
  constructor(ctx, speed, increaseSize){
    super(ctx, speed);
    this.sheeps = sheepChoices[Math.floor(Math.random() * sheepChoices.length)];
    this.points = 4;
    this.increaseSize = increaseSize - 0.3;
    this.move();
  }

  draw() {
    this.ctx.drawImage(this.sheeps, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }
}

export default Sheep;