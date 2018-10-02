/****************************************************
 * 
 *  MEAN OOP - Ninja class III
 *  shawn chen
 *  Oct 1, 2018
 *  codingDojo
 * 
 ****************************************************/
class Ninja {
    constructor(name) {
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 100;
    }

    sayName() {
        console.log('My Ninja name is ' + this.name + '!');
    }
    showStats() {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.speed + ', Strength: ' + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log('Name: ' + this.name + ' has gained 10 health!');
        return this;
    }
    // add punch to the methods
    punch(ninja) {
        ninja.health -= 5;
        let display = ninja.name+' was punched by '+this.name+' and lost 5 Health!';
        console.log(display);
        return this;
    }
    kick(ninja) {
        let dmg = 15 * strength;
        ninja.health -= dmg;
        let display = ninja.name+' was kicked by '+this.name+' and lost '+dmg+' Health!';
        console.log(display);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
        return this;
    }
}


const crazyNinja = new Ninja('shawn');
crazyNinja.sayName();
crazyNinja.showStats();
crazyNinja.drinkSake();

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();


