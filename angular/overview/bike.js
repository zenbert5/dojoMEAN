var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    Bike.prototype.displayInfo = function () {
        console.log("\nBike info - Price:$" + this.price + "  Maximum speed:" + this.max_speed + "  Total miles:" + this.miles + "\n");
        return this;
    };
    Bike.prototype.ride = function () {
        console.log('Riding..');
        this.miles += 10;
        return this;
    };
    Bike.prototype.reverse = function () {
        if (this.miles - 5 < 0) {
            this.miles = 0;
        }
        else {
            console.log('<--Reversing');
            this.miles -= 5;
        }
        return this;
    };
    return Bike;
}());
var joeBike = new Bike(200, '30mph');
var janeBike = new Bike(300, '25mph');
var slickBike = new Bike(500, '35mph');
joeBike.displayInfo().ride().ride().ride().displayInfo();
janeBike.displayInfo().ride().ride().reverse().reverse().displayInfo();
slickBike.displayInfo().reverse().reverse().reverse().displayInfo();
