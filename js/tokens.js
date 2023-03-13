export class Tokens {
  constructor(game) {
    this.game = game;
    this.width = 400;
    this.height = 398;
  }
  update() {
    // movement
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    const row = Math.floor(this.index / 4); // Assuming 4 characters per row
    const col = this.index % 4;
    const x = col * 50 + 10; // Assuming 50 pixels per character
    const y = row * 50 + 10;
  }
}

export class Arthur extends Tokens {
  constructor(game) {
    super(game);
    this.x = 0;
    this.y = 0;
    this.speedX = 2;
    this.speedX = 0;
    this.image = document.getElementById("Arthur");
  }
  update() {}
  draw(context) {
    context.drawImage(this.image, this.x, this.y)
  }
}
class Merlin extends Tokens {
  constructor() {
    super();
  }
}

class Gareth extends Tokens {
  constructor() {
    super();
  }
}
