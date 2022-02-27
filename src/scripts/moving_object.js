import Fire from "./fire_sprite";

class MovingObject {
  constructor(ctx){
    this.ctx = ctx;
    this.speed = 1;
    this.increaseSize = 0.6;
    this.xdim = 17;
    this.ydim = 10;
    this.hit = true;
  }
  
  static getRandPos(){
    const positions = [[400, 165], [550, 180], [100, 180], [250, 165]];
    return positions[Math.floor(Math.random() * positions.length)];
  }
  
  onFire() {
    console.log(this.hit);
    if (this.hit) {
      this.ctx.clearRect(this.pos[0], this.pos[1], this.xdim, this.ydim);
      const fire = new Fire(this.ctx, this.pos, this.xdim, this.ydim, this.speed, this.increaseSize);
      fire.animate();
    }
  } 
}

export default MovingObject;