
var reverse = arr => {
    if (!arr) {
        console.log('no dice');
        return arr;
    }
    let head = 0;
    let tail = arr.length - 1;

    while (head < tail) {
        swap(head, tail);
        head++;
        tail--;
    }
    return arr;
    function swap(head, tail) {
        let temp = arr[head];
        arr[head] = arr[tail];
        arr[tail] = temp;
    }
}

var arr = [1,2,3,4,5]
/* for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
} */
console.log(arr);
console.log(reverse(arr));

