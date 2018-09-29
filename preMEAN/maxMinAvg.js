
// max min avg

function maxMinAvg(arr) {
    var max=arr[0], min=arr[0], sum=0;
    for (x=0; x<arr.length; ++x) {
        if (arr[x] > max) {
            max = arr[x];
        } else if (arr[x] < min) {
            min = arr[x];
        }
        sum += arr[x];
    }
    return 'Maximum value in array is '+max+', minimum is '+min+', and average is '+(sum/arr.length).toFixed(2);
}

data = maxMinAvg([33, 22, 11, 9, 34, 99]);
console.log(data);