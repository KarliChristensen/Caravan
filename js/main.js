import { Tokens } from "./tokens.js";
import { Arthur } from "./tokens.js";
import { Merlin } from "./tokens.js";
import { Gareth } from "./tokens.js";
import { Pellinor } from "./tokens.js";
import { Goblin1 } from "./enemies.js";
import { Goblin2 } from "./enemies.js";
import { Goblin3 } from "./enemies.js";
import { Goblin4 } from "./enemies.js";

window.addEventListener(`load`, function () {
  const canvas = document.getElementById(`canvas1`);
  const popUp = document.getElementById("popUp");
  const ctx = canvas.getContext(`2d`);
  canvas.width = 1800;
  canvas.height = 1000;
  let gameStarted = false;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.tokensOnCanvasArr = [];
      this.enemiesOnCanvasArr = [];
      this.SpawnGridPositions = [
        [200, 200],
        [200, 400],
        [200, 600],
        [200, 800],
      ];
    }

    handleCombat(token, goblin) {
      // Attack from token to goblin
      goblin.health -= token.attack;
      console.log(
        `${token.name} causes ${token.attack} to the goblin, it has ${goblin.health} left`
      );
      if (goblin.health <= 0) {
        this.enemiesOnCanvasArr.splice(
          this.enemiesOnCanvasArr.indexOf(goblin),
          1
        );
        console.log(`A goblin was defeated`);
        if (this.enemiesOnCanvasArr.length === 0 || token.x > 1800) {
          gameWon();
          console.log(`Game won`);
          this.gameStarted = false;
          token.speedX = 2;
          token.speedY = 0;
        }
      } else {
        token.speedX = 0;
        token.speedY = 0;
        goblin.speedX = 0;
        goblin.speedY = 0;
      }
      // Attack from goblin to token
      token.health -= goblin.attack;
      console.log(
        `The goblin causes ${goblin.attack} to ${token.name}, he has ${token.health} left`
      );
      if (token.health <= 0) {
        this.tokensOnCanvasArr.splice(this.tokensOnCanvasArr.indexOf(token), 1);
        console.log(`A player was defeated`);
        if (this.tokensOnCanvasArr.length === 0) {
          console.log(`Game over`);
          this.gameStarted = false;
          gameOver();
        }
      }
    }

    update() {
      if (gameStarted) {
        for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
          const token = this.tokensOnCanvasArr[i];
          token.update();
        }
        for (let j = 0; j < this.enemiesOnCanvasArr.length; j++) {
          const goblin = this.enemiesOnCanvasArr[j];
          goblin.update();
        }
        for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
          const token = this.tokensOnCanvasArr[i];
          for (let j = 0; j < this.enemiesOnCanvasArr.length; j++) {
            const goblin = this.enemiesOnCanvasArr[j];
            if (
              goblin.x < token.x + token.width &&
              goblin.x + goblin.width > token.x &&
              goblin.y < token.y + token.height &&
              goblin.y + goblin.height > token.y
            ) {
              this.handleCombat(token, goblin);
            }
          }
        }
      }
    }

    draw(context) {
      context.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
        this.tokensOnCanvasArr[i].draw(context);
      }
      for (let i = 0; i < this.enemiesOnCanvasArr.length; i++) {
        this.enemiesOnCanvasArr[i].draw(context);
      }
    }

    addToken(token) {
      if (this.tokensOnCanvasArr.length < 2) {
        token.x = this.SpawnGridPositions[this.tokensOnCanvasArr.length][0];
        token.y = this.SpawnGridPositions[this.tokensOnCanvasArr.length][1];
        this.tokensOnCanvasArr.push(token);
        return true;
      } else {
        return false;
      }
    }

    removeToken(token) {
      const index = this.tokensOnCanvasArr.indexOf(token);
      if (index !== -1) {
        this.tokensOnCanvasArr.splice(index, 1);
        return true;
      }
      return false;
    }
    addGoblinEverySecond(game) {
      setInterval(function() {
        const newGoblin = new Goblin1(game);
        newGoblin.x = 1600;
        newGoblin.y = 200;
        game.enemiesOnCanvasArr.push(newGoblin);
      }, 1000);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  document.getElementById("charBtn1").addEventListener("click", char1ToArr);
  document.getElementById("charBtn2").addEventListener("click", char2ToArr);
  document.getElementById("charBtn3").addEventListener("click", char3ToArr);
  document.getElementById("charBtn4").addEventListener("click", char4ToArr);
  document
    .getElementById("characterSelect")
    .addEventListener("click", hideCharBar);

  function char1ToArr() {
    const arthur = new Arthur(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Arthur
    );
    if (index === -1) {
      if (game.addToken(arthur)) {
        console.log("Added Arthur to game");
      } else {
        console.log("Cannot add more than 2 characters");
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Arthur from game");
    }
  }

  function char2ToArr() {
    const merlin = new Merlin(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Merlin
    );
    if (index === -1) {
      if (game.addToken(merlin)) {
        console.log("Added Merlin to game");
      } else {
        console.log("Cannot add more than 2 characters");
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Merlin from game");
    }
  }

  function char3ToArr() {
    const gareth = new Gareth(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Gareth
    );
    if (index === -1) {
      if (game.addToken(gareth)) {
        console.log("Added Gareth to game");
      } else {
        console.log("Cannot add more than 2 characters");
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Gareth from game");
    }
  }

  function char4ToArr() {
    const pellinor = new Pellinor(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Pellinor
    );
    if (index === -1) {
      if (game.addToken(pellinor)) {
        console.log("Added Pellinor to game");
      } else {
        console.log("Cannot add more than 2 characters");
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Pellinor from game");
    }
  }

  function hideCharBar() {
    let pop = popUp.style.display;
    popUp.style.display = pop === "none" ? "block" : "none";
  }

  function gameOver() {
    let gameOverPopUp = document.getElementById("gameOverPopUp");
    let restartDiv = document.getElementById("restartDiv");
    gameOverPopUp.style.display = "block";
    restartDiv.style.display = "block";
  }

  function gameWon() {
    let gameWon = document.getElementById("gameWon");
    gameWon.style.display = "block";
  }

  function restartGame() {
    console.log("check")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.tokensOnCanvasArr = [];
    game.enemiesOnCanvasArr = [];
    game.gameStarted = false;
    gameOverPopUp.style.display = "none";
    restartDiv.style.display = "none";
    spawnGoblins(goblinArr);
  }

  document.getElementById("characterSelect");

  document.getElementById("start").addEventListener("click", function () {
    gameStarted = true;
  });
  document.getElementById("restart").addEventListener("click", function () {
    restartGame();
  });

  let goblinArr = [
    new Goblin1(game),
    new Goblin2(game),
    new Goblin3(game),
    new Goblin4(game),
  ];

  function spawnGoblins(goblinArr) {
    const spawnPositions = [
      [1600, 200],
      [1600, 250],
      [1600, 300],
      [1600, 350],
    ];

    const shuffledGoblins = goblinArr.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
      const goblin = shuffledGoblins[i];
      goblin.x = spawnPositions[i][0];
      goblin.y = spawnPositions[i][1];
      game.enemiesOnCanvasArr.push(goblin);
    }
  }

  spawnGoblins(goblinArr);
  animate();
});
