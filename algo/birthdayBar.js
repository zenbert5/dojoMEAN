'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(s, d, m) {
    // edge cases - not enough cells to find match
    if (m > s.length) {
        return 0;
    }
    if (m === 1) {
        if (s[0] === d) {
            return 1;
        } else {
            return 0;
        }
    }
    let possibleOptions = 0;
    // compare up to length - m(max cells)
    for (let i = 0; i <= s.length - m; i++) {
        console.log('iterations #', i);
        // prob statement not clear on subset of m permutations as allowed
        let sum = 0;
        console.log('from cell #',i,' through cell #', i+m);
        for (let j = i; j < i + m; j++) {
            sum += s[j]
            console.log(sum);
            if (sum > d) {
                break;
            }
/*             if (sum === d) {
                possibleOptions++;
                break;
            } */
        }
        if (sum === d) {
            possibleOptions++;
        }
    }
    return possibleOptions;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    console.log(result + '\n');

/*     ws.end(); */
}
