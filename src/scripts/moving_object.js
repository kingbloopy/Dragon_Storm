import Fire from "./fire_sprite";

class MovingObject {
  constructor(ctx, speed, increaseSize){
    this.ctx = ctx;
    this.speed = speed;
    this.increaseSize = increaseSize;
    this.xdim = 17;
    this.ydim = 10;
    this.hit = false;
    this.pos = MovingObject.getRandPos();
    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];
  }
  
  static getRandPos(){
    const positions = [[100, 190], [250, 178], [400, 175], [550, 185]];
    return positions[Math.floor(Math.random() * positions.length)];
  }
  
  onFire() {
    if (this.hit) {
      this.ctx.clearRect(this.pos[0], this.pos[1], this.xdim, this.ydim);
      const fire = new Fire(this.ctx, this.pos, this.xdim, this.ydim, this.speed, this.increaseSize);
      fire.animate();
    }
  } 

  move() {
    this.ctx.clearRect(
      this.pos[0],
      this.pos[1],
      this.xdim,
      this.ydim
    );

    this.pos[1] += this.speed;
    this.pos[0] -= 0.25;
    this.xdim += this.increaseSize;
    this.ydim += this.increaseSize;

    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];

    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }

}

export default MovingObject;