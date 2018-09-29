
// binary search

function binarySearch(arr, val) {
    var length = arr.length,
        midPoint = Math.floor(length / 2),
        newArr = arr;

    if (arr.length == 1 && arr[0] != val) {
        return -1;
    }
    if (arr[midPoint] > val) {
        var newArr = arr.slice(0, midPoint);
        return binarySearch(newArr, val);
    } else if (arr[midPoint] < val) {
        var newArr = arr.slice(midPoint + 1, arr.length);
        return binarySearch(newArr, val);
    } else {
        return midPoint;
    }
}

var arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

num1 = 8;
num2 = 89;
num3 = 7;

console.log(binarySearch(arr, num1));
console.log(binarySearch(arr, num2));
console.log(binarySearch(arr, num3));


var arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function binarySearch2(arr, val) {
    var startIndex = 0,
        endIndex = arr.length - 1,
        midPoint = Math.floor((endIndex + startIndex)/2);
    
    while(arr[midPoint] != val && startIndex < endIndex) {
        if (val < arr[midPoint]) {
            endIndex = midPoint - 1;
        } else if (val > arr[midPoint]) {
            startIndex = midPoint + 1;
        }
        midPoint = Math.floor((endIndex + startIndex)/2);
    }
    return (arr[midPoint] == val) ? midPoint : -1;
}

console.log(binarySearch2(arr, 8));
console.log(binarySearch2(arr, 21));
console.log(binarySearch2(arr, 144));
console.log(binarySearch2(arr, 7));