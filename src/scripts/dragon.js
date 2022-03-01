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
  }

  inFireZone(element){
    // if (element.centerPos === undefined) console.log(true);
    const target = element.centerPos;
    const targetZone = [
      (target[0] + element.xdim/4),
      (target[1] + element.ydim/4),
      (target[0] - element.xdim/4),
      (target[1] - element.ydim/4)
    ];

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

  
  inHitZone(element) {
    if (element instanceof Mountain){
      const center = element.centerPos;
      const dragonHitZone = [
        (this.centerPos[0] + 100), 
        (this.centerPos[0] - 100),
        (this.centerPos[1] + 50),
        (this.centerPos[1] - 50)
      ];
      console.log(dragonHitZone);
      console.log(element.centerPos);
      console.log(this.centerPos);

      if (
        (center[0] >= dragonHitZone[0])
        && (center[0] <= dragonHitZone[1])
        && (center[1] >= dragonHitZone[3])
        && (center[1] <= dragonHitZone[4]) 
      ){
        return true;
      }
    }
    return false;
  }

  // findCenter(){
  //   this.ctx.fillStyle = 'pink';
  //   this.ctx.fillRect(this.centerPos[0], this.centerPos[1], 3, 3);  
  // }
  
  // hitMountain(element) {
  //   if (element instanceof Mountain && this.inFireZone(element)) {
  //     element.hit = true;
  //     return true;
  //   }
  //   return false;
  // }

  blowFire(element) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.fire = true;
        this.ctx.clearRect(this.xPos, this.yPos, 200, 200);
        this.draw();
        if (this.inFireZone(element) && !(element instanceof Mountain)) {
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

  // getAimPos(){
  //   this.ctx.fillStyle = 'pink';
  //   this.ctx.fillRect(this.aimPos[0], this.aimPos[1], 10, 10);
  // }

}

export default Dragon;

// module.exports = Dragon;