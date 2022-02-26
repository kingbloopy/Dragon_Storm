import Fire from "./fire_sprite";

class MovingObject {
  constructor(ctx){
    this.ctx = ctx;
  }
  
  static getRandPos(){
    const positions = [[100, 150], [250, 140], [400, 140], [560, 155]];
    return positions[Math.floor(Math.random() * positions.length)];
  }
  
  onFire() {
    if (this.hit) {
      this.ctx.clearRect(this.pos[0], this.pos[1], 300, 200);
      let firePos = [this.pos[0] + 80, this.pos[1] + 30];
      let fire = new Fire(this.ctx, firePos);
      fire.animate(firePos);
    }
  } 
}

export default MovingObject;