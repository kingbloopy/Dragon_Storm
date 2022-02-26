// import Fire from "./fire_sprite";
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
    this.hit = true;
    this.pos = Castle.getRandPos();
    this.xdim = 80;
    this.ydim = 60;
  }
  
  draw(){
    // this.ctx.drawImage(this.castle, this.pos[0], this.pos[1], this.xdim, this.ydim);
    this.ctx.drawImage(this.castle, this.pos[0], this.pos[1], 300, 200);
  }

  move(){
    setInterval(() => {
      this.ctx.clearRect(this.pos[0], this.pos[1], this.xdim, this.ydim);
      this.pos[1] += 2;
      this.draw();
      // this.ctx.clearRect(0, 0, 720, 737);
    }, 20);
  }
}

export default Castle;