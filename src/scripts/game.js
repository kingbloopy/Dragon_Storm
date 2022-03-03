import Dragon from "./dragon";
import Castle from "./castle";
import Village from "./village";
import Sheep from "./sheep";
import Tree from "./tree";
import Mountain from "./mountain";
import GameOver from "./game_over";
import Cloud from "./cloud";
import Grass from "./grass";

class Game {
  constructor(ctx1, ctx2, ctx3){
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.ctx3 = ctx3;
    this.speed = 1;
    this.increaseSize = 0.6;
    this.frequency = 4000;
    this.changeFreq = this.frequency;
    this.currentTargets = [];
    this.currentObstacles = [];
    this.generateElementsId = null;
    this.dragon = null;
    this.gameOver = false;
    this.totalPoints = 0;
    this.fireNoise = new Audio("./assets/sounds/mixkit-fire-swoosh-burning-1328-[AudioTrimmer.com] (1).wav");
    this.fireNoise.playbackRate = 1.5;
    this.hitNoise = new Audio("./assets/sounds/mixkit-falling-hit-on-gravel-756.wav");
    this.gameOverNoise = new Audio("./assets/sounds/mixkit-retro-arcade-game-over-470 (1).wav");
    this.upgradeSpeed = null;
    this.generateCloudsId = null;
    this.generateGrassId = null;
    this.GOpopup = null;
  }
  
  startGame(){
    this.dragon = new Dragon(this.ctx1);
    if(this.dragon !== null){
      this.animateDragon();
      this.blowFire();
    }
    this.generateClouds();
    this.generateGrass();
    this.upgradeSpeed = setInterval(this.repeaterFunc.bind(this), this.frequency);
    this.GOpopup = new GameOver(this.ctx1);
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
    if (this.gameOver === false){
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
  }

  generateClouds(){
    if (this.gameOver === false){
      this.generateCloudsId = setInterval(() => {
        new Cloud(this.ctx1);
      }, 5500);
    }
  }

  generateGrass(){
    if (this.gameOver === false){
      this.generateGrassId = setInterval(() => {
        new Grass(this.ctx3);
      }, 100);
    }
  }
  
  checkHitConditions(){
    for (let i = 0; i < this.currentObstacles.length; i++){
      let obstacle = this.currentObstacles[i];
      const checkHitId = setInterval(() => {
        if (this.inHitZone(obstacle)){
          this.hitNoise.play();
          this.dragon.endMove();
          this.gameOver = true;
          this.ifGameOver();
          clearInterval(checkHitId);
        }
      }, 50);
    }
  }

  inHitZone(obstacle){
    if (this.gameOver === false){
      const center = obstacle.centerPos;
      const dragonHitZone = [
        (this.dragon.centerPos[0] + 100),
        (this.dragon.centerPos[0] - 100),
        (this.dragon.centerPos[1] + 80),
        (this.dragon.centerPos[1] - 80)
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
    if (this.gameOver === false){
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
  }

  blowFire() {
    if (this.gameOver === false){
      document.addEventListener('keydown', e => {
        if (e.code === 'Space') {
          if (this.dragon === null) return;
          this.dragon.fire = true;
          this.ctx1.clearRect(this.dragon.xPos, this.dragon.yPos, 200, 200);
          this.dragon.draw();
          this.fireNoise.play();
        }
      });
      document.addEventListener('keyup', e => {
        if (e.code === 'Space') {
          if (this.dragon === null) return;
          this.dragon.fire = false;
          this.ctx1.clearRect(this.dragon.xPos, this.dragon.yPos, 200, 200);
          this.dragon.draw();
        }
      });
    }
  }
  
  moveHoriz(moveLeft, moveRight){
    if (this.gameOver === false){
      this.dragon.flyLeft = moveLeft;
      this.dragon.flyRight = moveRight;
    } else {
      this.dragon.flyLeft = false;
      this.dragon.flyRight = false;
    }
  }
  
  moveVert(moveUp, moveDown){
    if (this.gameOver === false){
      this.dragon.flyUp = moveUp;
      this.dragon.flyDown = moveDown;
    } else {
      this.dragon.flyUp = false;
      this.dragon.flyDown = false;
    }
  }
  
  animateDragon() {
    if (this.dragon === null) return;
    this.dragon.startmove();
    this.dragon.flyHoriz();
    this.dragon.flyVert();
    requestAnimationFrame(this.animateDragon.bind(this));
  }

  ifGameOver(){
    if (this.gameOver === true){
      clearInterval(this.upgradeSpeed);
      clearInterval(this.generateGrassId);
      setTimeout(() => {
        this.gameOverNoise.play();
        this.GOpopup.popup();
      }, 3000);
    }
  }

  resetGameOver(){
    this.gameOver = true;
    clearInterval(this.upgradeSpeed);
    clearInterval(this.generateCloudsId);
    clearInterval(this.generateGrassId);
    this.totalPoints = 0;
    this.addPoints();
    this.speed = 1;
    this.increaseSize = 0.6;
    this.frequency = 4000;
    this.changeFreq = this.frequency;
    this.currentTargets = [];
    this.currentObstacles = [];
    this.generateElementsId = null;
    this.GOpopup.remove();
    this.GOpopup = null;
    this.dragon = null;
    this.upgradeSpeed = null;
    this.generateCloudsId = null;
    this.ctx1.clearRect(0, 0, 737, 720);
    this.ctx2.clearRect(0, 0, 737, 720);
    this.ctx3.clearRect(0, 0, 737, 720);
  }

}

export default Game;