export class Tokens {
  constructor() {
    this.game = game;
    this.width = 400;
    this.height = 398;
  }
  update() {
    // movement
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, );
  }
}

class Arthur extends Tokens {
  constructor() {
    super();
    this.game = game;
    this.x = 0; //fix
    this.y = 0; //fix
    this.speedX = 2;
    this.speedX = 0;
    this.image = document.getElementById(`token_arthur`)
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
