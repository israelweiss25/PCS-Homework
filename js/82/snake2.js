(async function () {
    const audioGameOver = document.querySelector('#gameOver');
    const audioAppleEaten = document.querySelector('#appleEaten');
    const scoreErea = document.querySelector('#score');
    const SNAKE_SIZE = 64;

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    function resizeCanvas() {
        theCanvas.width = window.innerWidth * .6 - (window.innerWidth * .6 % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - ((window.innerHeight - 50) % SNAKE_SIZE) - 50;
        console.log(window.innerHeight);
    }
    console.log(window.innerWidth);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    class Snake {
        selfImg;
        previousX;
        previousY;
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.snakeSize = SNAKE_SIZE;
        }
    }
    class SnakeHead extends Snake {
        constructor(x = 0, y = 0) {
            super(x, y);
            this.direction = 'ArrowRight';
        }

        draw() {
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
        draw() {
            context.fillStyle = 'green';
            context.beginPath();
            context.roundRect(this.x, this.y, 64, 64, [10]);
            context.fill();
        }
    }

    class Apple {
        appleImg;
        constructor() {
            this.x = 0;
            this.y = 0;

        }
        draw() {
            context.drawImage(this.appleImg, this.x, this.y);
        }
    }
    const appleImage = await getImg('images/apple2.png');
    const snakeHeadImg = await getImg('images/snakeHead.png');
    const backGroundImg = await getImg('images/backGround.jpg');

    context.drawImage(backGroundImg, 0, 0, theCanvas.width, theCanvas.height);
    context.drawImage(snakeHeadImg, theCanvas.width / 2 - snakeHeadImg.width / 2, theCanvas.height / 2 - snakeHeadImg.height / 2);



    async function playGame() {

        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        context.drawImage(backGroundImg, 0, 0, theCanvas.width, theCanvas.height);

        const snakeParts = [];
        const apple = new Apple();
        apple.x = getRandomNumber(theCanvas.width);
        apple.y = getRandomNumber(theCanvas.height);
        apple.appleImg = appleImage;
        apple.draw();

        const snakeHead = new SnakeHead();
        snakeHead.selfImg = snakeHeadImg;
        snakeParts.push(snakeHead);
        snakeHead.draw();

        let gameOver = false;
        let speed = 500;
        let score = 0;
        scoreErea.textContent = score;
        setTimeout(function gameLoop() {
            snakeHead.move();
            if (snakeHead.x >= theCanvas.width || snakeHead.x < 0 || snakeHead.y >= theCanvas.height || snakeHead.y < 0) {
                gameOver = true;
            }
            for (let i = 1; i < snakeParts.length; i++) {
                if (snakeHead.x === snakeParts[i]?.x && snakeHead.y === snakeParts[i]?.y) {
                    gameOver = true;
                }
            }
            if (gameOver) {
                playSound(audioGameOver);
                context.fillStyle = 'red';
                context.font = '50px Arial';
                const text = 'Game over';
                const tm = context.measureText(text);
                context.fillText(text, theCanvas.width / 2 - tm.width / 2, theCanvas.height / 2);
                playing = false;
            }
            if (!gameOver) {
                context.clearRect(0, 0, theCanvas.width, theCanvas.height);
                context.drawImage(backGroundImg, 0, 0, theCanvas.width, theCanvas.height);
                if (snakeParts[0].x === apple.x && snakeParts[0].y === apple.y) {
                    apple.x = getRandomNumber(theCanvas.width);
                    apple.y = getRandomNumber(theCanvas.height);

                    const tail = new Tail(snakeParts[snakeParts.length - 1].previousX, snakeParts[snakeParts.length - 1].previousY);
                    snakeParts.push(tail);

                    playSound(audioAppleEaten);
                    score++;
                    scoreErea.textContent = score;
                    speed -= speed * .05;
                }
                apple.draw();
                snakeHead.draw();
                for (let i = 1; i < snakeParts.length; i++) {
                    snakeParts[i].move(snakeParts[i - 1].previousX, snakeParts[i - 1].previousY).draw();
                }
                setTimeout(gameLoop, speed);

            }
        }, speed);
    }

    const audioStart = document.querySelector('#start');
    const play = document.querySelector('#play');

    let playing = false;
    play.addEventListener('click', () => {
        if (!playing) {
            playSound(audioStart);
            !muted ? audioStart.onended = () => playGame() : playGame();
            playing = true;
        }
    });


    let muted = false;
    const speaker = document.querySelector('#speaker');
    speaker.addEventListener('click', () => {
        if (!muted) {
            muted = true;
            speaker.src = 'images/muted.png';
        } else {
            muted = false;
            speaker.src = 'images/speaker2.png';
        }

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
        let n = Math.floor(Math.random() * max + 1);
        n -= n % SNAKE_SIZE;
        return n;
    }
    function playSound(sound) {
        (!muted) && sound.play();

    }
}());