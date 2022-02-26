
class Fire {
  constructor(ctx, pos){
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "assets/fire_sprite.png";
    this.frameWidth = 140;
    this.frameHeight = 160;
    this.spriteWidth = 468;
    this.spriteHeight = 498;
    this.currentFrame = 0;
    this.animate(pos);
  }

  animate(pos){

    setInterval(() => {
      this.currentFrame++;

      const maxFrame = 24;
      if (this.currentFrame == maxFrame) this.currentFrame = 0;

      let col = this.currentFrame % 5;
      let row = Math.floor(this.currentFrame/5);

      this.ctx.clearRect(pos[0], pos[1], this.frameWidth, this.frameHeight);
      this.ctx.drawImage(
        this.sprite, 
        col * this.spriteWidth, 
        row * this.spriteHeight, 
        this.spriteWidth,
        this.spriteHeight,
        pos[0], 
        pos[1],
        this.frameWidth,
        this.frameHeight
        );
    }, 70);
  }
}

export default Fire;