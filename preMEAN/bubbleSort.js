
// bubbleSort with fast exit 

function bubbleSort(arr) {
    var temp=0;
    var sortSize = arr.length;
    for (x = 0; x < sortSize; ++x) {
        // set tripwire for detecting no bubble swap
        var trigger = false;
        for (y = 0; y < sortSize-x; ++ y) {
            if (arr[y] > arr[y+1]) {
                temp = arr[y+1];
                arr[y+1] = arr[y];
                arr[y] = temp;
                trigger = true;
            }
        }
        console.log('iter['+x+'] array ==> '+arr)
        // if no swap -- items are in order -- exit
        if (trigger == false) {
            break;
        }
    }
    return arr;
}

array1 = [3,7,11,4,8,2,3,22,1];
array2 = [3,7,11,4,8,22,24,32,54];
array3 = [3,7,11,4,8,2,3,22,1];

console.log(bubbleSort(array1));
console.log(bubbleSort(array2));
console.log(bubbleSort(array3));