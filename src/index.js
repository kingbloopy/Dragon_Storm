import Dragon from "./scripts/dragon";
import Game from "./scripts/game";
import Castle from "./scripts/castle";
import Fire from "./scripts/fire_sprite";
import Village from "./scripts/village"

window.addEventListener('DOMContentLoaded', (event) => {
  console.log(`Yay, it's Dragon Time!`);

  const canvas1 = document.getElementsByClassName('top-layer')[0]
  const ctx1 = canvas1.getContext('2d');
  window.ctx1 = ctx1;
  const canvas2 = document.getElementsByClassName('bottom-layer')[0];
  const ctx2 = canvas2.getContext('2d');
  window.ctx2 = ctx2

  // window.Game = Game;
  window.Dragon = Dragon;
  window.Castle = Castle;
  // window.Fire = Fire;
  window.Village = Village;
  window.game = new Game(ctx1, ctx2);

  let moveLeft = false;
  let moveRight = false;
  
  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowLeft'){
      moveLeft = true;
      game.moveHoriz(moveLeft, moveRight);
    } else if (e.code === 'ArrowRight'){
      moveRight = true;
      game.moveHoriz(moveLeft, moveRight);
    }
  });
  
  document.addEventListener('keyup', e => {
    if (e.code === 'ArrowLeft') {
      moveLeft = false;
      game.moveHoriz(moveLeft, moveRight);
    } else if (e.code === 'ArrowRight') {
      moveRight = false;
      game.moveHoriz(moveLeft, moveRight);
    }
  });
  
  let moveUp = false;
  let moveDown = false;

  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowUp'){
      moveUp = true;
      game.moveVert(moveUp, moveDown);
    } else if (e.code === 'ArrowDown'){
      moveDown = true;
      game.moveVert(moveUp, moveDown);
    }
  });

  document.addEventListener('keyup', e => {
    if (e.code === 'ArrowUp') {
      moveUp = false;
      game.moveVert(moveUp, moveDown);
    } else if (e.code === 'ArrowDown') {
      moveDown = false;
      game.moveVert(moveUp, moveDown);
    }
  });
  

});