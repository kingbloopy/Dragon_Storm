import Dragon from "./scripts/dragon";
import Game from "./scripts/game";
import Castle from "./scripts/castle";
import Fire from "./scripts/fire_sprite";

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Dragon time!');

  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');
  window.ctx = ctx;
  window.Game = Game;
  window.Dragon = Dragon;
  window.Castle = Castle;
  window.Fire = Fire;
  new Game(ctx);
});