

class GameOver {
  constructor(ctx){
    this.ctx = ctx
    this.message = new Image();
    this.message.src = "./assets/splash/game_over.png";
    this.pos = [275, 150];
    this.xdim = 200;
    this.ydim = 50;
    this.animateId = null;
  }

  popup(){
    this.move();
  }

  remove(){
    cancelAnimationFrame(this.animateId);
  }

  draw(){
    this.ctx.drawImage(this.message, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }

  move() {
    if (this.pos[1] !== 300){
      this.ctx.clearRect(
        this.pos[0],
        this.pos[1],
        this.xdim,
        this.ydim
      );
  
      this.pos[1] += 1;
      this.pos[0] -= 0.65;
      this.xdim += 1.3
      this.ydim += 0.45
    }

    this.draw();
    this.animateId = requestAnimationFrame(this.move.bind(this));
  }
}

export default GameOver;