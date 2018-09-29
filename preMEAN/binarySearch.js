// binary search serial and recursive

var arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function binarySearch2(arr, val) {
    var startIndex = 0,
        endIndex = arr.length - 1,
        midPoint = Math.floor((endIndex + startIndex) / 2);

    while (arr[midPoint] != val && startIndex < endIndex) {
        if (val < arr[midPoint]) {
            endIndex = midPoint - 1;
        } else if (val > arr[midPoint]) {
            startIndex = midPoint + 1;
        }
        midPoint = Math.floor((endIndex + startIndex) / 2);
    }
    return arr[midPoint] == val ? midPoint : -1;
}

// recursive method

function binarySearch(arr, val, indexes) {
    var startIndex = indexes.startIndex,
        endIndex = indexes.endIndex;
        midPoint = Math.floor((endIndex + startIndex) / 2);

    if (arr[midPoint] == val) {
        return midPoint;
    }

    if (val > arr[midPoint]) {
        var new_index = {
            startIndex: midPoint + 1,
            endIndex: endIndex
        }
        return binarySearch(arr, val, new_index);
    } else if (val < arr[midPoint]) {
        var new_index = {
            startIndex: startIndex,
            endIndex: midPoint - 1
        }
        return binarySearch(arr, val, new_index);
    }
};


// main

var num1 = 8,
    num2 = 21,
    num3 = 144,
    num4 = 7;

console.log('\nThe array is: ', arr);
console.log('Index of ', num1, ' is ', binarySearch2(arr, num1));
console.log('Index of ', num2, ' is ', binarySearch2(arr, num2));
console.log('Index of ', num3, ' is ', binarySearch2(arr, num3));
console.log('Index of ', num4, ' is ', binarySearch2(arr, num4));

var num5 = 34;
console.log('\nRecursive Method');
console.log('Index of ',num5,' is ', binarySearch(arr, num5, {startIndex:0, endIndex: arr.length}));
