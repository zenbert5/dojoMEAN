/****************************************************
 * 
 *  MEAN OOP - Ninja class II
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
    // add punch to the methods
    this.punch = function(ninja) {  
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            let display = ninja.name+' was punched by '+this.name+' and lost 5 Health!';
            console.log(display);
            return this;
        } else {
            console.log(''+ninja+' is not a valid Ninja');
            return;
        }
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja) {
            let dmg = 15 * strength;
            ninja.health -= dmg;
            let display = ninja.name+' was kicked by '+this.name+' and lost '+dmg+' Health!';
            console.log(display);
            return this;
        } else {
            console.log(''+ninja+' is not a valid Ninja');
            return;
        }
    }
}

/* var ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats(); */

var blueNinja = new Ninja('Goemon');
var redNinja = new Ninja('Bill Gates');
// punch
redNinja.punch(blueNinja);
redNinja.showStats();
blueNinja.showStats();
// kick
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();
