import Dragon from "./scripts/dragon";
import Game from "./scripts/game";

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded!');

  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');
  window.ctx = ctx;
  window.Game = Game;
  window.Dragon = Dragon;
  new Game(ctx);
});