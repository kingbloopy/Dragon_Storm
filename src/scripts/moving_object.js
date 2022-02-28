import Fire from "./fire_sprite";

class MovingObject {
  constructor(ctx, speed, increaseSize){
    this.ctx = ctx;
    this.speed = speed;
    // this.increaseSize = 0.6;
    this.increaseSize = increaseSize;
    this.xdim = 17;
    this.ydim = 10;
    // this.xdim = 200;
    // this.ydim = 180;
    this.hit = false;
    this.pos = MovingObject.getRandPos();
    // this.pos = [300, 200]
    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];
    // this.triggerFire();
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
    this.pos[0] -= 0.27;
    this.xdim += this.increaseSize;
    this.ydim += this.increaseSize;

    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];

    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }

  // inFireZone(dragonPos) {
  //   const targetZone = [
  //     (this.centerPos[0] + this.xdim / 4),
  //     (this.centerPos[1] + this.ydim / 4),
  //     (this.centerPos[0] - this.xdim / 4),
  //     (this.centerPos[1] - this.ydim / 4)
  //   ];
  //   console.log(targetZone);

  //   if (
  //     (dragonPos[0] <= targetZone[0])
  //     && (dragonPos[0] >= targetZone[2])
  //     && (dragonPos[1] <= targetZone[1])
  //     && (dragonPos[1] >= targetZone[3])
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  // triggerFire() {
  //   document.addEventListener('keydown', e => {
  //     if (e.code === 'SPACE'){
  //       // if (this.inFireZone(currentDragonPos)){
  //         this.onFire();
  //       // }
  //     }
  //   });
  // }

  // findCenter(){
  //   this.ctx.fillStyle = 'pink';
  //   this.ctx.fillRect(
  //     this.centerPos[0], 
  //     this.centerPos[1], 
  //     (this.xdim / 4),
  //     (this.ydim / 4)
  //     // this.xdim/2, 
  //     // this.ydim/2
  //     );
  // }
}

export default MovingObject;