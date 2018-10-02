// this by default always reference the parent enclosure 
console.log(this);

function Person(name, age) {
    // create a private variable that stores a reference to the new object we create
    var self = this;  // creates reference to the current object using 'self' 
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log("this is a private method for " + self.name);
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
var joe = new Person("Joe", 23);
joe.greet();


var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function() {
        console.log( "I am a method");
    };
}
    var obj1 = new MyObjConstructor('object1');
    var obj2 = new MyObjConstructor('object2');
    console.log(obj1);

// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age) {
    var privateVariable = "This variable is private";
    var privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
var eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!




/****
 * Examples of prototype explained 
 * 
 * 
 ****/


function Cat(catName) {
    var name = catName;
    this.getName = function() {
        return name;
    };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function() {
console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// we may change an instance's attributes rather than keeping the value set by prototype
muffin.numLegs = 3;
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs
