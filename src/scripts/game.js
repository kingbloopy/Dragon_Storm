import Dragon from "./dragon";
import Castle from "./castle";
import Village from "./village";
import Sheep from "./sheep";
import Tree from "./tree";
import Mountain from "./mountain";

class Game {
  constructor(ctx1, ctx2){
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.speed = 1;
    this.increaseSize = 0.6;
    this.frequency = 4000;
    this.currentTargets = [];
    // this.frequency = 3000;
    // this.speed = 3;
    // this.increaseSize = 1.3;
    this.dragon = new Dragon(ctx1);
    this.gameOver = false;
    this.animateDragon();
    this.blowFire();
    this.generateTargets();
  }

  generateTargets(){
    const categories = [Sheep, Tree, Castle, Village];
    this.generateTargetsId = setInterval(() => {
      let randEle = categories[Math.floor(Math.random() * categories.length)]
      let element = new randEle(this.ctx2, this.speed, this.increaseSize);
      this.currentTargets.push(element);
      this.checkBurnConditions();

      setTimeout(() => {
        this.currentTargets.shift();
      }, this.frequency*2);

    }, this.frequency);
  }

  checkBurnConditions(){
    for (let i = 0; i < this.currentTargets.length; i++){
      let element = this.currentTargets[i];
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Space'){
          if (this.inFireZone(element)){
            element.hit = true;
            element.onFire();
          }
        }
      });
    }
  }

  inFireZone(element) {
    const target = element.centerPos;
    const targetZone = [
      (target[0] + element.xdim / 3),
      (target[0] - element.xdim / 3),
      (target[1] + element.ydim / 2),
      (target[1] - element.xdim / 2)
    ];

    if (
      (this.dragon.aimPos[0] <= targetZone[0])
      && (this.dragon.aimPos[0] >= targetZone[1])
      && (this.dragon.aimPos[1] <= targetZone[2])
      && (this.dragon.aimPos[1] >= targetZone[3])
    ) {
      return true;
    }
    return false;
  }

  blowFire() {
    document.addEventListener('keydown', e => {
      if (e.code === 'Space') {
        this.dragon.fire = true;
        this.ctx1.clearRect(this.dragon.xPos, this.dragon.yPos, 200, 200);
        this.dragon.draw();
      }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Space') {
        this.dragon.fire = false;
        this.ctx1.clearRect(this.dragon.xPos, this.dragon.yPos, 200, 200);
        this.dragon.draw();
      }
    });
  }
  
  moveHoriz(moveLeft, moveRight){
    this.dragon.flyLeft = moveLeft;
    this.dragon.flyRight = moveRight;
  }
  
  moveVert(moveUp, moveDown){
    this.dragon.flyUp = moveUp;
    this.dragon.flyDown = moveDown
  }
  
  animateDragon() {
    this.dragon.startmove();
    this.dragon.flyHoriz();
    this.dragon.flyVert();
    requestAnimationFrame(this.animateDragon.bind(this));
  }

}

export default Game;