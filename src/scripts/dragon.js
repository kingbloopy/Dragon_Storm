
class Dragon {
  constructor(ctx){
    this.dragon = new Image();
    this.dragon.src = "./assets/dragon/dragon.png";
    this.fireDragon = new Image ();
    this.fireDragon.src = "./assets/dragon/blowing_fire.png";
    this.fire = false;
    this.ctx = ctx;
    this.xdim = 285;
    this.ydim = 780;
    this.flyLeft = false;
    this.flyRight = false;
    this.flyUp = false;
    this.flyDown = false;
  }
  
  draw(){
    if (this.fire){
      this.ctx.drawImage(this.fireDragon, this.xdim, this.ydim, 200, 200);
    } else {
      this.ctx.drawImage(this.dragon, this.xdim, this.ydim, 200, 200);
    }
  }

  startmove(){
    if (this.ydim >= 520){
      this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
      this.ydim -= 1;
      this.draw();
    }
  }

  blowFire(){
    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.fire = true;
        this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
        this.draw();
      }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Space') { 
        this.fire = false;
        this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
        this.draw();
      }
    });
  }

  flyHoriz() {
    if (this.flyLeft && this.xdim > 20){
      this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
      this.xdim -= 5;
      this.draw();
    } else if (this.flyRight && this.xdim < 530){
      this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
      this.xdim += 5;
      this.draw();
    }
  }

  flyVert() {
    if (this.flyUp && this.ydim > 200) {
      this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
      this.ydim -= 5;
      this.draw();
    } else if (this.flyDown && this.ydim < 515) {
      this.ctx.clearRect(this.xdim, this.ydim, 200, 200);
      this.ydim += 5;
      this.draw();
    }
  }

}

export default Dragon;

// module.exports = Dragon;