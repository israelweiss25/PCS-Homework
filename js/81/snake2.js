(function () {
    const audioGameOver = document.querySelector('#gameOver');
    const audioAppleEaten = document.querySelector('#appleEaten');
    const scoreErea = document.querySelector('#score');
    const SNAKE_SIZE = 64;

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    function resizeCanvas() {
        theCanvas.width = window.innerWidth * .8 - (window.innerWidth * .8 % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    class Snake {
        snakeHead;
        direction;
        snakeSize;
        previousX;
        previousY;
        constructor(x, y) {
            this.x = x || 0;
            this.y = y || 0;
            this.snakeSize = SNAKE_SIZE;
            this.direction = 'ArrowRight';

        }

        draw() {
            context.drawImage(this.snakeHead, this.x, this.y);
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
    class Tail extends Snake {
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
    }

    class Apple {
        appleImg;
        x;
        y;
        constructor() {
            this.x = 0;
            this.y = 0;

        }

        draw() {
            context.drawImage(this.appleImg, this.x, this.y);
        }


    }
    const snakes = [];
    async function playGame() {
        const appleImage = await getImg('apple2.png');
        const snakeImg = await getImg('snakeHead.png');


        const apple = new Apple();
        apple.x = getRandomNumber(theCanvas.width);
        apple.y = getRandomNumber(theCanvas.height);
        apple.appleImg = appleImage;
        apple.draw();

        const snake = new Snake();
        snake.snakeHead = snakeImg;
        snakes.push(snake);
        snake.draw();
        let speed = 500;
        let score = 0;
        const interval = setInterval(() => {

            let tail;
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);
            if (snakes[0].x === apple.x && snakes[0].y === apple.y) {
                apple.x = getRandomNumber(theCanvas.width);
                apple.y = getRandomNumber(theCanvas.height);
                apple.draw();

                tail = new Tail(snakes[snakes.length - 1].previousX, snakes[snakes.length - 1].previousY);
                tail.snakeHead = snake.snakeHead;
                snakes.push(tail);

                audioAppleEaten.play();
                audioAppleEaten.loop = false;
                score++;
                scoreErea.textContent = score;
                speed -= 50;
            } else {
                apple.draw(this.x, this.y);

            }
            if (snake.x > theCanvas.width || snake.x < 0 || snake.y > theCanvas.height || snake.y < 0) {
                context.clearRect(0, 0, theCanvas.width, theCanvas.height);
                context.font = '30px Arial';
                audioGameOver.play();
                audioGameOver.loop = false;
                context.fillText('Game over', 80, 80);
                clearInterval(interval);

            } else {
                for (let i = 0; i < snakes.length; i++) {
                    switch (i) {
                        case 0:
                            snakes[0].move().draw();
                            break;
                        default:
                            snakes[i].move(snakes[i - 1].previousX, snakes[i - 1].previousY).draw();

                    }
                }
            }
        }, speed);


    }
    const play = document.querySelector('#play');
    play.addEventListener('click', () => {
        playGame();

    });

    function getImg(link) {
        return new Promise((resolve, reject) => {
            const img = document.createElement('img');
            img.src = link;
            img.onload = () => resolve(img);
            img.onerror = () => reject;

        });
    }
    function getRandomNumber(max) {
        let maxNum = Math.floor(max / (SNAKE_SIZE));
        let num = Math.floor(Math.random() * maxNum);
        return num * SNAKE_SIZE;
    }
}());