export class Snake {
  selfImg;
  previousX;
  previousY;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.snakeSize = 64;
  }
}

export class SnakeHead extends Snake {
  constructor(x = 0, y = 0) {
    super(x, y);
    this.direction = 'ArrowRight';
  }

  draw(context) {
    context.drawImage(this.selfImg, this.x, this.y);
  }
  move() {
    this.previousX = this.x;
    this.previousY = this.y;
    switch (this.direction) {
      case 'ArrowRight':
        this.x += this.snakeSize;
        break;
      case 'ArrowLeft':
        this.x -= this.snakeSize;
        break;
      case 'ArrowUp':
        this.y -= this.snakeSize;
        break;
      case 'ArrowDown':
        this.y += this.snakeSize;
        break;
    }
    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'ArrowDown':
          this.direction = e.key;
          break;
      }
    });
    return this;
  }
}
export class Tail extends Snake {
  constructor(x, y) {
    super(x, y);
  }
  move(prevX, prevY) {
    this.previousX = this.x;
    this.previousY = this.y;
    this.x = prevX;
    this.y = prevY;

    return this;
  }
  draw(context) {
    context.fillStyle = 'green';
    context.beginPath();
    context.roundRect(this.x, this.y, 64, 64, [10]);
    context.fill();
  }
}
export class Apple {
  appleImg;
  constructor() {
    this.x = 0;
    this.y = 0;

  }
  draw(context) {
    context.drawImage(this.appleImg, this.x, this.y);
  }
}
