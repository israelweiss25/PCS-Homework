class Element {
    #innerText;
    constructor(text) {
        this.#innerText = text;
        this.#children = [];
        this.setInnerText = text => {
            this.#innerText = text;
        };
        this.getInnerText = () => {
            return this.#innerText;
        };
    }

    #children;

    addChild(child) {
        this.#children.push(child);
    }
    removeChild(child) {
        this.#children.splice(this.#children.indexOf(child), 1);
    }
    getChildren() {
        return this.#children;
    }

    render() {
        console.log(this.#innerText);
        document.body.append(createP(this.#innerText));
        
        this.#children.forEach(child => {
            child.render();
        });
    }
}

class Div extends Element {
    constructor(text) {
        super(text);
    }
    render() {
        console.log(`I am a ${this.constructor.name}`);
        document.body.append(createP(`I am a ${this.constructor.name}`));
        super.render();
    }
}
class H1 extends Element {
    constructor(text) {
        super(text);
    }
    render() {
        console.log(`I am a ${this.constructor.name}`);
        document.body.append(createP(`I am a ${this.constructor.name}`));
        super.render();
    }
}

const div = new Div('a');
const h11 = new H1('b');
const h12 = new H1('c');
div.addChild(h11);
div.addChild(h12);
div.render();

div.setInnerText('new div inner text');
div.removeChild(h11);
div.render();


function createP(text){
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}