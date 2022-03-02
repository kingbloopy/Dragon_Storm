const cloud1 = new Image();
cloud1.src = "./assets/objects/cloud_1.png";
const cloud2 = new Image();
cloud2.src = "./assets/objects/cloud_2.png";
const cloud3 = new Image();
cloud3.src = "./assets/objects/cloud_3.png";

const clouds = [cloud1, cloud2, cloud3];

class Cloud {
  constructor(ctx) {
    this.ctx = ctx
    this.cloud = clouds[Math.floor(Math.random() * clouds.length)];
    this.xdim = 110;
    this.ydim = 65;
    this.positions = [[750, 20], [750, 95], [750, 55], [750, 70]];
    this.pos = this.positions[Math.floor(Math.random() * this.positions.length)];
    this.move();
  }

  draw() {
    this.ctx.drawImage(this.cloud, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }

  move() {
    if (this.pos[0] > -110){
      this.ctx.clearRect(
        this.pos[0],
        this.pos[1],
        this.xdim,
        this.ydim
      );

      this.pos[0] -= 0.5;
    }

    this.draw();
    requestAnimationFrame(this.move.bind(this));
  }
}

export default Cloud;