import Dragon from "./dragon";
import Fire from "./fire_sprite";

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.dragon = new Dragon(ctx);
    this.enterDragon();
    // this.fire = new Fire(ctx, [300,300]);
  }

  enterDragon(){
    setInterval(() => this.dragon.startmove(), 20);
  }
}

export default Game;