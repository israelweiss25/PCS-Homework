(function () {
    const theCanvas = document.querySelector('#canvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;


    }
    window.addEventListener('resize', resizeCanvas);
    const balls = [];
    class Ball {

        constructor(radius, color, dx, dy) {
            this.radius = radius;
            this.color = color || 'blue';
            this.x = this.radius + 1;
            this.y = this.radius + 1;
            this.dx = dx || 1;
            this.dy = dy || 2.5;
            balls.push(this);
        }
        draw() {
            setInterval(() => {
                context.clearRect(this.x - (this.radius + 1), this.y - (this.radius + 1), (this.radius * 2) + 2, (this.radius * 2) + 2);
                // context.clearRect(0, 0, theCanvas.width, theCanvas.height);
                context.beginPath();
                context.fillStyle = this.color;
                this.x += this.dx;
                this.y += this.dy;
                if (this.x < this.radius + 1 || this.x >= theCanvas.width - this.radius + 1) {
                    this.dx = -this.dx;
                }
                if (this.y < this.radius + 1 || this.y >= theCanvas.height - this.radius + 1) {
                    this.dy = -this.dy;
                }
                context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                context.fill();

                context.stroke();

            }, 10);
        }
    }
    resizeCanvas();
    const ball = new Ball(50);
    ball.draw();



    const radiusInput = document.querySelector('#radius');
    const colorInput = document.querySelector('#colorInput');
    const submitBtn = document.querySelector('#submitBtn');
    const dx = document.querySelector('#dx');
    const dy = document.querySelector('#dy');
    const speed = document.querySelector('#speed');
    submitBtn.addEventListener('click', () => {
        const ball = new Ball(parseInt(radiusInput.value), colorInput.value, parseInt(dx.value), parseInt(dy.value));
        ball.draw();
        console.log(speed.value);
    });
}());




