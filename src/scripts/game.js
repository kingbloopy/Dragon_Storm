import Dragon from "./dragon";
import Fire from "./fire_sprite";

class Game {
  constructor(ctx1, ctx2){
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.dragon = new Dragon(ctx1);
    this.blowFire = this.dragon.blowFire();
    this.animateDragon();
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