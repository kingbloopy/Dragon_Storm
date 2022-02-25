import Dragon from "./dragon";

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.dragon = new Dragon(ctx);
    this.enterDragon();
  }

  enterDragon(){
    setInterval(() => this.dragon.startmove(), 20);
  }
}

export default Game;