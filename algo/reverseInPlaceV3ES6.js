
class NumArr {
    constructor() {
        this.arr = [];
    }

    init(size) {
        for (let i = 0; i < size - 1; i++) {
            this.arr[i] = Math.floor(Math.random() * 100) + 1;
        }
        return this;
    }

    reverse() {
        var swap = (h, t) => {
            let temp = this.arr[h];
            this.arr[h] = this.arr[t];
            this.arr[t] = temp;
        }

        if (!this.arr) {
            console.log('no object');
            return this;
        }

        let head = 0;
        let tail = this.arr.length - 1;

        while(head < tail) {
            swap(head, tail);
            head++;
            tail--;
        }
        return this;
    }

    show() {
        console.log(`The array is --> ${JSON.stringify(this.arr)}`);
        return this;
    }
}

let myArr = new NumArr;
myArr.init(20).show().reverse().show();