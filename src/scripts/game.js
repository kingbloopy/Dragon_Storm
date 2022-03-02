import Dragon from "./dragon";
import MovingObject from "./moving_object";
import Castle from "./castle";
import Village from "./village";
import Sheep from "./sheep";
import Tree from "./tree";
import Mountain from "./mountain";
import GameOver from "./game_over";
import Cloud from "./cloud";

class Game {
  constructor(ctx1, ctx2){
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.speed = 1;
    this.increaseSize = 0.6;
    this.frequency = 4000;
    this.changeFreq = this.frequency;
    this.currentTargets = [];
    this.currentObstacles = [];
    this.generateElementsId = null;
    this.dragon = new Dragon(ctx1);
    this.gameOver = false;
    this.totalPoints = 0;
    this.animateDragon();
    this.blowFire();
    this.generateClouds();
    this.upgradeSpeed = setInterval(this.repeaterFunc.bind(this), this.frequency);
  }

repeaterFunc(){
  this.generateElements();
  this.changeStats();
  if (this.changeFreq !== this.frequency) {
    clearInterval(this.upgradeSpeed);
    this.frequency = this.changeFreq;
    this.upgradeSpeed = setInterval(this.repeaterFunc.bind(this), this.frequency);
  }
}

  addPoints(){
    const showPoints = document.getElementsByClassName("points")[0];
    showPoints.innerHTML = `${this.totalPoints}`;
  }

changeStats(){
  if ((this.frequency <= 4000) && (this.frequency > 3800)){
    this.changeFreq -= 50;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
  if ((this.frequency <= 3800) && (this.frequency > 3600)){
    this.changeFreq -= 100;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
  if ((this.frequency <= 3600) && (this.frequency > 3000)){
    this.changeFreq -= 200;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
  if ((this.frequency <= 3000) && (this.frequency > 2000)){
    this.changeFreq -= 400;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
  if ((this.frequency <= 2000) && (this.frequency > 1000)){
    this.changeFreq -= 100;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
  if ((this.frequency <= 1000) && (this.frequency > 700)){
    this.changeFreq -= 30;
    this.speed += 0.05;
    this.increaseSize += 0.02;
  } 
}

  generateElements(){
    const categories = [Sheep, Tree, Castle, Village, Mountain];
      let randEle = categories[Math.floor(Math.random() * categories.length)]
      let element = new randEle(this.ctx2, this.speed, this.increaseSize);
      if (element instanceof Mountain){
        this.currentObstacles.push(element)
        this.checkHitConditions();
      } else {
        this.currentTargets.push(element);
        this.checkBurnConditions();
      }

      setTimeout(() => {
        this.currentTargets.shift();
        this.currentObstacles.shift();
      }, this.frequency*2);
  }

  generateClouds(){
    setInterval(() => {
      new Cloud(ctx1);
    }, 5500);
  }
  
  checkHitConditions(){
    for (let i = 0; i < this.currentObstacles.length; i++){
      let obstacle = this.currentObstacles[i];
      const checkHitId = setInterval(() => {
        if (this.inHitZone(obstacle)){
          this.gameOver = true;
          this.ifGameOver();
          clearInterval(checkHitId);
        }
      }, 50);
    }
  }

  inHitZone(obstacle){
    const center = obstacle.centerPos;
    const dragonHitZone = [
      (this.dragon.centerPos[0] + 100),
      (this.dragon.centerPos[0] - 100),
      (this.dragon.centerPos[1] + 100),
      (this.dragon.centerPos[1] - 100)
    ];

    if (
      (center[0] <= dragonHitZone[0])
      && (center[0] >= dragonHitZone[1])
      && (center[1] <= dragonHitZone[2])
      && (center[1] >= dragonHitZone[3])
    ) {
      return true;
    }
    return false;
  }

  checkBurnConditions(){
    for (let i = 0; i < this.currentTargets.length; i++){
      let target = this.currentTargets[i];
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Space'){
          if (this.inFireZone(target)){
            target.hit = true;
            target.onFire();
            this.totalPoints += target.points;
            this.addPoints();
          }
        }
      });
    }
  }

  inFireZone(target) {
    const targetZone = [
      (target.centerPos[0] + target.xdim / 3),
      (target.centerPos[0] - target.xdim / 3),
      (target.centerPos[1] + target.ydim / 2),
      (target.centerPos[1] - target.xdim / 2)
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

  ifGameOver(){
    if (this.gameOver === true){
      clearInterval(this.upgradeSpeed);
      console.log('game over!');
      setTimeout(() => {
        new GameOver(this.ctx1);
      }, 3000);
    }
  }

}

export default Game;