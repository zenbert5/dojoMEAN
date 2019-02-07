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

// Complete the superReducedString function below.
function superReducedString(s) {
    // edge case - 1 value
    if (s.length === 1) {
        return s;
    }
    let pos = 0;
    while (pos <= s.length - 1) {
        if (s[pos] === s[pos + 1]) {
            if (pos === 0) {
                s = s.slice(2);
            } else {
                s = s.slice(0, pos) + s.slice(pos + 2);
                pos = 0;
            }
        } else {
            pos++;
        }
    }
    if (!s.length) {
        return 'Empty String';
    } else {
        return s;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
