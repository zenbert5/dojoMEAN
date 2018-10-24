// mergeSort

var mergeSort = (arr) => {

    var merge = (left, right) => {
        var ordered = [];
        l_index = 0;
        r_index = 0;
        while(l_index < left.length && r_index < right.length) {
            if (left[l_index] < right[r_index]) {
                ordered.concat(left[l_index]);
                l_index++;
            }
            else {
                ordered.concat(right[r_index]);
                r_index++;
            }
        }
        ordered.concat(left.slice(l_index, left.length+1)).concat(right.slice(r_index, right.length+1));
        return ordered;
    }

    if (arr.length === 1) {
        return arr;
    }

    m1 = mergeSort(arr.slice(0, arr.length/2 + 1));
    m2 = mergeSort(arr.slice(arr.length/2, arr.length));

    return merge(m1, m2);
}