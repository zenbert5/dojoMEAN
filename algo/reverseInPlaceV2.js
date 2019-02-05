
/* 
    Array of number class function
*/
var NumArr = function() {
    this.arr = [];

    // init array
    NumArr.prototype.init = function(size) {
        for (var i = 0; i < size - 1; i++) {
            this.arr[i] = Math.floor(Math.random() * 100) + 1;
        }
        return this;
    }

    // reverse array
    NumArr.prototype.reverse = function() {
        var me = this;

        if (!this.arr) {
            return this;
        }

        var head = 0;
        var tail = this.arr.length - 1;

        while(head < tail) {
            swap(head, tail);
            head++;
            tail--;
        }

        return this;

        function swap(head, tail) {
            var temp = me.arr[head];
            me.arr[head] = me.arr[tail];
            me.arr[tail] = temp;
        }
    }
    // show arry of number
    NumArr.prototype.show = function() {
        console.log(JSON.stringify(this.arr));
        return this;
    }
}

var myArr = new NumArr;
myArr.init(10).show().reverse().show();