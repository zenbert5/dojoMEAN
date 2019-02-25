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

// Complete the alternate function below.
function alternate(s) {
    // edge cases
    if (s.length === 1) {
        return 0;
    } else if (s.length === 2) {
        return 2;
    }

    let charDict = [];
    let possiblePermutations = [];
    for (let i = 0; i < s.length; i++) {
        if (!charDict.includes(s[i])) {
            charDict.push(s[i]);
        }
    }

    for (let x = 0; x < charDict.length; x++) {
        for (let y = x+1; y < charDict.length; y++) {
            possiblePermutations.push([charDict[x], charDict[y]]);
        }
    }
    // console.log(possiblePermutations);
    let myMatch, myRegex, tryString;
    let currMatch, highMatch = 0;
    for (let t = 0; t < possiblePermutations.length; t++) {
        myMatch = new RegExp('[' + possiblePermutations[t][0] + ',' + possiblePermutations[t][1] + ']', 'g');
        myRegex = new RegExp('^([' + possiblePermutations[t][0] + '])(?!\\1)([' + possiblePermutations[t][1] + '])(?:\\1\\2)*\\1?$', 'g');
        tryString = s.match(myMatch).join('');
        // console.log(s, possiblePermutations[t][0], possiblePermutations[t][1], s.match(myMatch));
        if (tryString.match(myRegex)) {
            // console.log('hit')
            currMatch = s.match(myMatch).join('').length;
            if (currMatch > highMatch) {
                highMatch = currMatch;
            }
        }
    }
    return highMatch;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
