/********************************************
 * 
 *  MEAN javascript advanced - js library
 *  Oct 4, 2018
 *  shawn chen
 *  codingDojo San Jose
 * 
 ********************************************/

// example 
function each(arr, callback) {
    for (var i = 0; i < arr.length; ++i) {
        callback(arr[i]);
    }
}

var _ = {
    map: function (list, iteratee) {
        var result = [];
        for (let i = 0; i < list.length; ++i) {
            result.push(iteratee(list[i]));
        }
        return result;
    },
    reduce: function (list, iteratee, memo) {
        if (memo === null) {
            memo = 0;
        }
        while (list.length > 0) {
            memo = iteratee(memo, list[0]);
            list.shift();
        }
        return memo;
    },
    find: function (list, predicate) {
        for (let i = 0; i < list.length; ++i) {
            if (predicate(list[i])) {
                return list[i];
            }
        }
        return;
    },
    filter: function (list, predicate) {
        var result = [];
        for (let i = 0; i < list.length; ++i) {
            if (predicate(list[i])) {
                result.push(list[i]);
            }
        }
        return result;
    },
    reject: function (list, predicate) {
        var result = [];
        for (let i = 0; i < list.length; ++i) {
            if (predicate(list[i]) === false) {
                result.push(list[i]);
            }
        }
        return result;
    },
}
// you just created a library with 5 methods!

let m = _.map([1, 2, 3], function (num) { return num * 3 });
console.log(m);

let x = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
console.log(x);

let f = _.filter([1, 2, 3, 4, 5, 6, 7, 8], function (num) { return num % 2 == 0; });
console.log(f);

let r = _.reject([1, 2, 3, 4, 5, 6, 7, 8], function (num) { return num % 2 == 0; });
console.log(r);