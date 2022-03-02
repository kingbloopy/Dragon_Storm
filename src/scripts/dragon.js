import Mountain from "./mountain";

class Dragon {
  constructor(ctx){
    this.dragon = new Image();
    this.dragon.src = "./assets/dragon/dragon.png";
    this.fireDragon = new Image ();
    this.fireDragon.src = "./assets/dragon/blowing_fire.png";
    this.ctx = ctx;
    this.xPos = 285;
    this.yPos = 780;
    this.flyLeft = false;
    this.flyRight = false;
    this.flyUp = false;
    this.flyDown = false;
    this.fire = false;
    this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
    this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
    this.currentObstacle = null;
  }

  draw(){
    if (this.fire){
      this.ctx.drawImage(this.fireDragon, this.xPos, this.yPos, 200, 200);
    } else {
      this.ctx.drawImage(this.dragon, this.xPos, this.yPos, 200, 200);
    }
  }

  startmove(){
    if (this.yPos >= 520){
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
      this.yPos -= 1;
      this.draw();
    }
  }

  flyHoriz() {
    if (this.flyLeft && this.xPos >= 0){
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
      this.xPos -= 5;
      this.draw();
    } else if (this.flyRight && this.xPos < 552){
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
      this.xPos += 5;
      this.draw();
    }
  }

  flyVert() {
    if (this.flyUp && this.yPos > 200) {
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
      this.yPos -= 5;
      this.draw();
    } else if (this.flyDown && this.yPos < 515) {
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.centerPos = [(this.xPos + 88), (this.yPos + 80)];
      this.yPos += 5;
      this.draw();
    }
  }

  getAimPos(){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.aimPos[0], this.aimPos[1], 10, 10);
  }

}

export default Dragon;