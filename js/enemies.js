export class Enemies {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 149;
    this.health = 2;
    this.attack = 1;
  }
  update() {}
  draw() {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Goblin1 extends Enemies {
  constructor(game) {
    super(game);
    this.speedX = -2;
    this.speedY = 0;
    this.image = document.getElementById("goblin1");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Goblin2 extends Enemies {
  constructor(game) {
    super(game);
    this.speedX = -2;
    this.speedY = 0;
    this.image = document.getElementById("goblin2");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Goblin3 extends Enemies {
  constructor(game) {
    super(game);
    this.speedX = -2;
    this.speedY = 0;
    this.image = document.getElementById("goblin3");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Goblin4 extends Enemies {
  constructor(game) {
    super(game);
    this.speedX = -2;
    this.speedY = 0;
    this.image = document.getElementById("goblin4");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}
