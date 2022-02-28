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
  constructor(ctx, speed, increaseSize){
    super(ctx, speed, increaseSize);
    this.castle = castles[Math.floor(Math.random() * castles.length)];
    this.points = 8;
    this.move();
    // this.draw();
  }
  
  draw(){
    this.ctx.drawImage(this.castle, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }
}

export default Castle;