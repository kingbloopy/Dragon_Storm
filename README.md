
# Welcome to DRAGON STORM

<img src="./assets/upper_nav/logo.png" alt="logo" width="500"/>

### Play the live demo here: https://kingbloopy.github.io/Dragon_Storm/
#### (For best results, please use Google Chrome)
As you fly over the span of a green medieval countryside, signs of human civilization will begin to appear from the horizon. Your dragon duties include burning down as many structures/targets as you can, for as long as you can. As you continue to soar and light up the countryside with fire, the dragon will gradually fly faster and faster from excitement, causing it to become more difficult to fly and aim. With this in mind, you must also avoid the dangerous mountains that will hurt the dragon and end the game if you fly into one!

![](https://media.giphy.com/media/wUFjKS92yQTyUPgWpD/giphy.gif)

### In order to *fly*, use the following keyboard keys to move:
```
Left Arrow, Right Arrow, Up Arrow, or Down Arrow
```
### In order to *blow fire*, press the:
```
SPACE KEY
```

### Structures / targets to light on fire:
  - `Castles: 8 pts`
  - `Villages: 6 pts`
  - `Sheep: 4 pts`
  - `Trees: 2 pts`

### Obstacles to **AVOID**:
  - `Mountains` - GAME OVER

---

<img src="./assets/Screen Shot 2022-03-02 at 9.50.15 PM.png" width="700">
<img src="./assets/Screen Shot 2022-03-02 at 9.51.23 PM.png" width="700">

- Home page displays logo and a variety of button options:
  - New Game to start and play a new game
  - Instructions to pop up a modal for the rules and instructions
  - Bottom right corner displays button links to personal pages
- Once a new game has started, the user has options to:
  - Mute the background music
  - Exit current game
  - View their total burn points throughout the game

---

## Technical Implementation

```
  inFireZone(target) {
    if (this.gameOver === false){
      const targetZone = [
        (target.centerPos[0] + target.xdim / 3),
        (target.centerPos[0] - target.xdim / 3),
        (target.centerPos[1] + target.ydim / 2),
        (target.centerPos[1] - target.xdim / 2)
      ];
  
      if (
        (this.dragon.aimPos[0] <= targetZone[0])
        && (this.dragon.aimPos[0] >= targetZone[1])
        && (this.dragon.aimPos[1] <= targetZone[2])
        && (this.dragon.aimPos[1] >= targetZone[3])
      ) {
        return true;
      }
      return false;
    }
  }
```
The inFireZone function in the game class, checks the current center position of each moving target. It calculates the area in which a target is in the 'firezone' of the dragon, and returns a boolean. The target zone for each element is constantly changing as it increases in size when it moves down the canvas This function calculates for that change in size by accessing the current targets x-dimensions and y-dimensions.

```
this.upgradeSpeed = setInterval(this.repeaterFunc.bind(this), this.frequency);
```

```
  repeaterFunc(){
    this.generateElements();
    this.changeStats();
    if (this.changeFreq !== this.frequency) {
      clearInterval(this.upgradeSpeed);
      this.frequency = this.changeFreq;
      this.upgradeSpeed = setInterval(this.repeaterFunc.bind(this), this.frequency);
    }
  }
```

```
  generateElements(){
    if (this.gameOver === false){
      const categories = [Sheep, Tree, Castle, Village, Mountain];
        let randEle = categories[Math.floor(Math.random() * categories.length)]
        let element = new randEle(this.ctx2, this.speed, this.increaseSize);
        if (element instanceof Mountain){
          this.currentObstacles.push(element)
          this.checkHitConditions();
        } else {
          this.currentTargets.push(element);
          this.checkBurnConditions();
        }
  
        setTimeout(() => {
          this.currentTargets.shift();
          this.currentObstacles.shift();
        }, this.frequency*2);
    }
  }
```
These three code snippets, located in the game class, all work together in order to increase the frequency in which elements are generated on the canvas. First, 'this.upgradeSpeed' is initialized to a Set Interval that takes in the 'repeaterFunc' below and passes in a frequency of 'this.frequency' that the game was initialized with. Second, the 'repeaterFunc' generates elements and increases the speed, increase in size, and frequency for each element through the 'changeStats' function. Then, the 'repeaterFunc' checks to see if there was increase in frequency and updates the 'this.frequency' variable and 'this.updateSpeed' variable. This pattern continues as a way to consistently adjust the frequency of the game through a set Interval.


---

## Technologies, Libraries, APIs

This game was implemented using:
  - The *Canvas API* to render multiple canvases/backgrounds and to generate moving elements
  -  *Webpack* and *Babel* to bundle and transpile the source Javascript code
  -  *npm* to manage project dependencies

## Bonus Features

  - Allowing the user to choose which color dragon before starting the game
  - Allowing the user to choose a night theme in addition to the daytime theme
  - Make dragon a moving sprite character
  - Adding more dangerous obstacles for the Dragon to avoid

---

*All design elements, graphic art, and logos done by Maggie McDonald.*
