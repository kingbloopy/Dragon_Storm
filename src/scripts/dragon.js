
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

  inFireZone(element){
    // console.log(element);
    // console.log(element.centerPos);
    const target = element.centerPos;
    const targetZone = [
      (target[0] + element.xdim/4),
      (target[1] + element.ydim/4),
      (target[0] - element.xdim/4),
      (target[1] - element.ydim/4)
    ];

    // add logic later to also have yaxis be on lower part of screen
    if (
      (this.aimPos[0] <= targetZone[0])
      && (this.aimPos[0] >= targetZone[2])
      && (this.aimPos[1] <= targetZone[1])
      && (this.aimPos[1] >= targetZone[3])
      ){
        return true;
    }
    return false;
  }

  blowFire(element) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.fire = true;
        this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
        this.draw();
        if (this.inFireZone(element)) {
          element.hit = true;
          element.onFire();
        }
      }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Space') {
        this.fire = false;
        this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
        this.draw();
      }
    });
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
      this.yPos -= 1;
      this.draw();
    }
  }

  // triggerFire() {
  //   document.addEventListener('keydown', e => {
  //     if (e.code === 'SPACE') {
  //       // if (this.inFireZone(currentDragonPos)){
  //       this.onFire();
  //       // }
  //     }
  //   });
  // }

  flyHoriz() {
    if (this.flyLeft && this.xPos > 20){
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.xPos -= 5;
      this.draw();
    } else if (this.flyRight && this.xPos < 530){
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.xPos += 5;
      this.draw();
    }
  }

  flyVert() {
    if (this.flyUp && this.yPos > 200) {
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.yPos -= 5;
      this.draw();
    } else if (this.flyDown && this.yPos < 515) {
      this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
      this.aimPos = [(this.xPos + 87), (this.yPos - 10)];
      this.yPos += 5;
      this.draw();
    }
  }

  // getAimPos(){
  //   this.ctx.fillStyle = 'pink';
  //   this.ctx.fillRect(this.aimPos[0], this.aimPos[1], 10, 10);
  // }

}

export default Dragon;

// module.exports = Dragon;