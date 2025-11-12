(function () {
    'use strict';
    function Vehicle(color) {
        this.color = color;
        this.speed = 0;
    }
    const vehicleFunctions = {
        go(speed) {
            this.speed = speed;
            console.log(`now going at ${this.speed}mph`);
        },
        print() {
            console.log(`the vehicle color is ${this.color}, and it's speed is ${this.speed}mph`);
        }
    };
    Vehicle.prototype = vehicleFunctions;
    Vehicle.prototype.constructor = Vehicle;

    function Plane(color) {
        Vehicle.call(this, color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;


    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now flying at ${this.speed}mph`);
    };

    const car = new Vehicle('white');
    car.go(80);
    car.print();
    console.log(car);

    const truck = new Vehicle('blue');
    truck.go(60);
    truck.print();
    console.log(truck);


    const plane = new Plane('black');
    plane.go(250);
    plane.print();
    console.log(plane);

    ///////////////////
    class VehicleC {
        constructor(color) {
            this.color = color || 'black';
            let speed = 0;
            this.setSpeed = s => {
                speed = s;
            };
            this.getSpeed = () => {
                return speed;
            };
        }
        go(speed) {
            this.setSpeed(speed);
            console.log(`now going at ${this.getSpeed()}mph`);
        }
        print() {
            console.log(`the vehicle's color is ${this.color}, and it's speed is ${this.getSpeed()}mph`);
        }
    }

    const carC = new VehicleC();
    carC.go(60);
    carC.print();
    console.log(carC);

    class PlaneC extends VehicleC {
        constructor(color) {
            super(color);
        }
        go() {
            console.log(`now flying at ${275}mph`);
        }
    }

    const planeC = new PlaneC();
    planeC.go(275);
    planeC.print();
    console.log(planeC);
}());