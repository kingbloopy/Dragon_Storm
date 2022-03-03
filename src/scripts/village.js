import MovingObject from "./moving_object";

const barn = new Image();
barn.src = "./assets/objects/barn.png";
const houses = new Image();
houses.src = "./assets/objects/villagenew.png";

const structures = [barn, houses];

class Village extends MovingObject {
  constructor(ctx, speed, increaseSize){
    super(ctx, speed, increaseSize);
    this.structure = structures[Math.floor(Math.random() * structures.length)];
    this.points = 6;
    this.move();
  }

  draw() {
    this.ctx.drawImage(this.structure, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }
}

export default Village;