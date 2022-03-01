import MovingObject from "./moving_object";

const tree1 = new Image();
tree1.src = "assets/objects/tree_1.png";
const tree2 = new Image();
tree2.src = "assets/objects/tree_2.png";
const tree3 = new Image();
tree3.src = "assets/objects/tree_3.png";

const trees = [tree1, tree2, tree3];

class Tree extends MovingObject{
  constructor(ctx, speed, increaseSize){
    super(ctx, speed);
    this.tree = trees[Math.floor(Math.random() * trees.length)];
    this.points = 2;
    this.increaseSize = 0.3;
    this.move();
  }

  draw() {
    this.ctx.drawImage(this.tree, this.pos[0], this.pos[1], this.xdim, this.ydim);
  }
}

export default Tree;