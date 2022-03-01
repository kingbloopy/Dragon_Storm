// import MovingObject from "./moving_object";

class Fire {
  constructor(ctx, pos, xdim, ydim, speed, increaseSize){
    this.sprite = new Image();
    this.sprite.src = "./assets/fire_sprite.png";
    this.ctx = ctx;
    this.pos = pos;
    this.xdim = xdim;
    this.ydim = xdim
    this.speed = speed;
    this.increaseSize = increaseSize;
    this.spriteWidth = 468;
    this.spriteHeight = 498;
    this.currentFrame = 0;
    // this.animate();
    // this.drawFire();
  }

  // drawFire(ctx){
  //   console.log('hitting function');

  //   // this.ctx.drawImage(this.sprite, this.pos[0], this.pos[1], this.xdim, this.ydim);
  //   let col = this.currentFrame % 5;
  //   let row = Math.floor(this.currentFrame / 5);

  //   ctx.drawImage(
  //     this.sprite,
  //     col * this.spriteWidth,
  //     row * this.spriteHeight,
  //     this.spriteWidth,
  //     this.spriteHeight,
  //     this.pos[0],
  //     this.pos[1],
  //     this.xdim,
  //     this.ydim
  //   );
  // }

  animate(){
    // console.log('hitting function');
      this.currentFrame++;

      const maxFrame = 24;
      if (this.currentFrame == maxFrame) this.currentFrame = 0;

      let col = this.currentFrame % 5;
      let row = Math.floor(this.currentFrame/5);

      this.ctx.clearRect(this.pos[0], this.pos[1], this.xdim, this.ydim);

      this.xdim += this.increaseSize;
      this.ydim += this.increaseSize;
      
      this.ctx.drawImage(
        this.sprite, 
        col * this.spriteWidth, 
        row * this.spriteHeight, 
        this.spriteWidth,
        this.spriteHeight,
        this.pos[0], 
        this.pos[1],
        this.xdim,
        this.ydim
        );
    requestAnimationFrame(this.animate.bind(this));
  }

}

export default Fire;