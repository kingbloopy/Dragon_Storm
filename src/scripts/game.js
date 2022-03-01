import Dragon from "./dragon";
import Castle from "./castle";
import Village from "./Village";
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
    // this.frequency = 3000;
    // this.speed = 3;
    // this.increaseSize = 1.3;
    this.dragon = new Dragon(ctx1);
    this.blowFire = this.dragon.blowFire();
    this.gameOver = false;
    this.animateDragon();
    this.generateObjects();
    // this.isGameOver();
  }

  generateObjects(){
    const categories = [Castle, Village, Sheep, Tree, Mountain];
    setInterval(() => {
      let randEle = categories[Math.floor(Math.random() * categories.length)]
      let element = new randEle(this.ctx2, this.speed, this.increaseSize);
      this.dragon.blowFire(element);
      // if (this.dragon.hitMountain(element)) this.gameOver = true;
    }, this.frequency);
  }

  isGameOver(){
    if(this.gameOver === true) console.log('game over!');
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