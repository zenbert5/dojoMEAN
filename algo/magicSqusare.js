'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    // brute force - 8 possible permutations 
    const magicPermutations = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];

    let minCost = Number.MAX_VALUE;
    for (let i = 0; i < magicPermutations.length; i++) {
        let currDelta = 0;
        for (let j = 0; j < s.length; j++) {
            currDelta += Math.abs(magicPermutations[i][j][0] - s[j][0]) +  
            Math.abs(magicPermutations[i][j][1] - s[j][1]) + 
            Math.abs(magicPermutations[i][j][2] - s[j][2]);
        }
        if (currDelta < minCost) {
            minCost = currDelta;
        }
    }
    return minCost;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    console.log('result = ', result);

/*     ws.write(result + '\n');

    ws.end(); */
}
