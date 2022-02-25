
class Dragon {
  constructor(ctx){
    this.dragon = new Image();
    this.dragon.src = "assets/dragon.png";
    this.ctx = ctx;
    this.xdim = 285;
    this.ydim = 780;
  }
  
  draw(){
    this.ctx.drawImage(this.dragon, this.xdim, this.ydim, 200, 200);
  }

  startmove(){
    if (this.ydim !== 520){
      this.ctx.clearRect(0, 0, 737, 720);
      this.ydim -= 1;
      this.draw();
    }
  }
}

export default Dragon;

// module.exports = Dragon;