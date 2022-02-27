// import Fire from "./fire_sprite";
import Fire from "./fire_sprite";
import MovingObject from "./moving_object";

const castle1 = new Image();
castle1.src = "assets/objects/castle_1_pink.png";
const castle2 = new Image();
castle2.src = "assets/objects/castle_1_yellow.png";
const castle3 = new Image();
castle3.src = "assets/objects/castle_2_blue.png";
const castle4 = new Image();
castle4.src = "assets/objects/castle_2_pink.png";

const castles = [castle1, castle2, castle3, castle4];

class Castle extends MovingObject {
  constructor(ctx){
    super(ctx);
    this.castle = castles[Math.floor(Math.random() * castles.length)];
    this.pos = Castle.getRandPos();
    this.move();
  }
  
  draw(){
    this.ctx.drawImage(this.castle, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }

  move(){
    this.ctx.clearRect(
      this.pos[0], 
      this.pos[1], 
      this.xdim, 
      this.ydim
      );

    this.pos[1] += this.speed;
    this.pos[0] -= 0.27;
    this.xdim += this.increaseSize;
    this.ydim += this.increaseSize;

    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }
}

export default Castle;