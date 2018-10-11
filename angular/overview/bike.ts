
/*
*   MEAN angular
*   oct 10, 2018
*   shawn chen
*   codingDojo
*
*   obj - create a bike ts class instance, instantiate 3 class objects and perform
*   methods against each obj instance
*/

class Bike {
    miles: number;
    constructor(public price: number, public max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`\nBike info - Price:$${this.price}  Maximum speed:${this.max_speed}  Total miles:${this.miles}\n`);
        return this;
    }
    ride() {
        console.log('Riding..');
        this.miles += 10;
        return this;
    }
    reverse() {
        if (this.miles - 5 < 0) {
            this.miles = 0;
        } else {
            console.log('<--Reversing');
            this.miles -= 5;
        }
        return this;
    }
}

// declare 3 instances
const joeBike = new Bike(200, '30mph');
const janeBike = new Bike(300, '25mph');
const slickBike = new Bike(500, '35mph');

// perform the operations as required
joeBike.displayInfo().ride().ride().ride().displayInfo();
janeBike.displayInfo().ride().ride().reverse().reverse().displayInfo();
slickBike.displayInfo().reverse().reverse().reverse().displayInfo();