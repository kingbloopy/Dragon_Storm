import Fire from "./fire_sprite";

class MovingObject {
  constructor(ctx){
    this.ctx = ctx;
    this.speed = 1;
    this.increaseSize = 0.5;
    this.xdim = 75;
    this.ydim = 50;
    this.hit = true;
    this.fire = new Fire(this.ctx, this.xdim, this.ydim, this.speed, this.increaseSize);
  }
  
  static getRandPos(){
    const positions = [[400, 150], [560, 165], [100, 165], [250, 150]];
    return positions[Math.floor(Math.random() * positions.length)];
  }
  
  onFire() {
    if (this.hit) {
      this.ctx.clearRect(this.pos[0], this.pos[1], this.xdim, this.ydim);
      this.fire.drawFire();
    }
  } 
}

export default MovingObject;