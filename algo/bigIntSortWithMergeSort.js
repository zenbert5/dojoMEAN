'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bigSorting function below.
function mergeSort(arr) {
    var merge = (left, right) => {
        let ordered = [];
        let l_index = 0;
        let r_index = 0;
        while (l_index < left.length && r_index < right.length) {
            if (left[l_index].length < right[r_index].length || (left[l_index].length == right[r_index].length && left[l_index] < right[r_index])) {
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

    const middle = Math.floor(arr.length / 2)
    const m1 = mergeSort(arr.slice(0, middle));
    const m2 = mergeSort(arr.slice(middle));

    return merge(m1, m2);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = mergeSort(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
