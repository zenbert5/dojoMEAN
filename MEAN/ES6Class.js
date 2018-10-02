class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log("You created a Dot!");
    }
}
const dot1 = new Dot(10, 10);

// ES5 way
function Dot(x, y) {
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation = function() {
    console.log("This Dot is at x " + this.x + " and y " + this.y);
}
var dot1 = new Dot(55, 20);
dot1.showLocation();
// ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot2 = new Dot(5, 13);
dot2.showLocation();


class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // prototype method
    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
    // static method
    static getHelp() {
        console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
    }
} 
const dot3 = new Dot(4, 2);
// we can see showLocation from our instance...
console.log(dot3.showLocation);
// but we can't see getHelp
console.log(dot3.getHelp);
// however we can call getHelp this way:
Dot.getHelp();



// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();


// setter and getters
// reference same object attribute in both assigning and getting it's content
class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
};

const pie = new Pizza(12, 6);
console.log(pie.slices);     // we use the getter to determine how many slices we have
pie.slices = 12;             // the setter will change the number of slices
console.log(pie.slices);     // use the getter again to make sure our slices have doubled

class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
