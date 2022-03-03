const grass1 = new Image();
grass1.src = "./assets/grass/g1.png";
const grass2 = new Image();
grass2.src = "./assets/grass/g2.png";
const grass3 = new Image();
grass3.src = "./assets/grass/g3.png";
const grass4 = new Image();
grass4.src = "./assets/grass/g4.png";
const grass5 = new Image();
grass5.src = "./assets/grass/g5.png";
const grass6 = new Image();
grass6.src = "./assets/grass/g6.png";
const grass7 = new Image();
grass7.src = "./assets/grass/g7.png";
const grass8 = new Image();
grass8.src = "./assets/grass/g8.png";
const grass9 = new Image();
grass9.src = "./assets/grass/g9.png";

const grasses = [grass1, grass2, grass3, grass4, grass5, grass6, grass7, grass8, grass9];

class Grass {
  constructor(ctx){
    this.ctx = ctx;
    this.speed = 1;
    this.increaseSize = 0.2;
    this.xdim = 80;
    this.ydim = 100;
    this.grass = grasses[Math.floor(Math.random() * grasses.length)];
    this.pos = Grass.getRandPos();
    this.move();
  }

  static getRandPos() {
    const positions = [[100, 190], [250, 178], [400, 175], [550, 185], [150, 190], [300, 178], [450, 175], [600, 185]];
    return positions[Math.floor(Math.random() * positions.length)];
  }


  draw() {
    this.ctx.drawImage(this.grass, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }

  move() {
    this.ctx.clearRect(
      this.pos[0],
      this.pos[1],
      this.xdim,
      this.ydim
    );

    this.pos[1] += this.speed;
    this.pos[0] -= 0.16;
    this.xdim += this.increaseSize;
    this.ydim += this.increaseSize;

    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];

    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }
}

export default Grass;