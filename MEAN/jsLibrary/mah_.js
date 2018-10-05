/***************************************
 * 
 * 
 * 
 * 
 * 
 * 
 ***************************************/

// example 
function each(arr, callback) {
    for (var i = 0; i < arr.length; ++i) {
        callback(arr[i]);
    }
}

var _ = {
    map: function (arr, iteratee) {
        for (obj in arr){
            iteratee(Object.entries(arr)[obj]);
        }
    },
    reduce: function (arr, iteratee, memo) {
        // code here;
        
    },
    find: function () {
        // code here;
    },
    filter: function () {
        // code here;
    },
    reject: function () {
        // code here;
    }
}
// you just created a library with 5 methods!
