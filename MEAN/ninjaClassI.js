/****************************************************
 * 
 *  MEAN OOP - Ninja class I
 *  shawn chen
 *  Oct 1, 2018
 *  codingDojo
 * 
 ****************************************************/
function Ninja(name) {
    // private  
    var self = this;
    var speed = 3;
    var strength = 3;
    // public
    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log('My Ninja name is ' + this.name + '!');
    }
    this.showStats = function() {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
    }
}

var ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();