import MovingObject from "./moving_object";

class Sheep extends MovingObject {
  constructor(ctx, speed, increaseSize){
    super(ctx, speed);
    this.sheeps = new Image();
    this.sheeps.src = "./assets/objects/sheeps3.png";
    this.points = 4;
    this.increaseSize = increaseSize - 0.3;
    // this.draw();
    this.move();
  }

  draw() {
    this.ctx.drawImage(this.sheeps, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }
}

export default Sheep;