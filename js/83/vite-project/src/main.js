import './style.css';
import { SnakeHead, Tail, Apple } from './snakeModules.js';
import dayjs from 'dayjs';

(async function () {
  const audioGameOver = document.querySelector('#gameOver');
  const audioAppleEaten = document.querySelector('#appleEaten');
  const scoreErea = document.querySelector('#score');
  const gameHeader = document.querySelector('#gameHeader');
  const time = document.querySelector('#time');

  time.textContent = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');

  const SNAKE_SIZE = 64;

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');
  function resizeCanvas() {
    theCanvas.width = window.innerWidth * .6 - (window.innerWidth * .6 % SNAKE_SIZE);
    gameHeader.style.width = `${theCanvas.width}px`

    theCanvas.height = window.innerHeight - ((window.innerHeight - 50) % SNAKE_SIZE) - 50;
  }
  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();
  setInterval(() => time.textContent = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A'), 1000);

  const appleImage = await getImg('src/images/apple2.png');
  const snakeHeadImg = await getImg('src/images/snakeHead.png');
  const backGroundImg = await getImg('src/images/backGround.jpg');

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
    apple.draw(context);

    const snakeHead = new SnakeHead();
    snakeHead.selfImg = snakeHeadImg;
    snakeParts.push(snakeHead);
    snakeHead.draw(context);

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
        apple.draw(context);
        snakeHead.draw(context);
        for (let i = 1; i < snakeParts.length; i++) {
          snakeParts[i].move(snakeParts[i - 1].previousX, snakeParts[i - 1].previousY).draw(context);
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
      speaker.src = 'src/images/muted.png';
    } else {
      muted = false;
      speaker.src = 'src/images/speaker2.png';
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
