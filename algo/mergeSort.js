// mergeSort

function mergeSort (arr) {

    var merge = (left, right) => {
        let ordered = [];
        let l_index = 0;
        let r_index = 0;
        while(l_index < left.length && r_index < right.length) {
            if (left[l_index] < right[r_index]) {
                ordered.push(left[l_index]);
                l_index++;
            }
            else {
                ordered.push(right[r_index]);
                r_index++;
            }
        }
        return ordered.concat(left.slice(l_index)).concat(right.slice(r_index));
    }

    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length /2)
    const m1 = mergeSort(arr.slice(0, middle));
    const m2 = mergeSort(arr.slice(middle));

    return merge(m1, m2);
}

// test

let myArr = [5, 10, 15, 30, 5, 7, 99, 2, 11];
console.log(mergeSort(myArr));
