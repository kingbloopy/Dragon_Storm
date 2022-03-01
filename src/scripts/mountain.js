
class Mountain {
  constructor(ctx, speed, increaseSize){
    this.ctx = ctx;
    this.speed = speed;
    this.increaseSize = increaseSize + 0.5;
    this.mountain = new Image();
    this.mountain.src = "./assets/objects/mountain.png";
    this.hit = false;
    // this.xdim = 17;
    // this.ydim = 10;
    this.hit = false;
    // this.pos = Mountain.getRandPos();
    this.xdim = 200;
    this.ydim = 180;
    this.hit = false;
    this.pos = [300, 200]
    this.centerPos = [
      (this.pos[0] + (this.xdim / 2)),
      (this.pos[1] + (this.ydim / 2))
    ];
    this.move();
    // this.draw();
  }

    findCenter(){
    this.ctx.fillStyle = 'pink';
    this.ctx.fillRect(
      this.centerPos[0],
      this.centerPos[1],
      (this.xdim / 4),
      (this.ydim / 4)
      // this.xdim/2,
      // this.ydim/2
      );
  }

  static getRandPos() {
    const positions = [[100, 190], [250, 178], [400, 175], [550, 185]];
    return positions[Math.floor(Math.random() * positions.length)];
  }

  draw() {
    this.ctx.drawImage(this.mountain, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }

  move() {
    this.ctx.clearRect(
      this.pos[0],
      this.pos[1],
      this.xdim,
      this.ydim
    );

    this.pos[1] += this.speed;
    this.pos[0] -= 0.44;
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

export default Mountain;