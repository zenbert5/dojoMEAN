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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    // setup index for lower case alpha
    const alphaDex = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let max = 0;
    // identify max value
    for (let i = 0; i < word.length; i++) {
        let charVal = h[alphaDex.indexOf(word[i])];
        console.log(`alphaDex of ${word[i]} is ${alphaDex.indexOf(word[i])}`);
        if (charVal > max) {
            max = charVal;
        }
    }
    // compute area 
    return max * word.length;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    console.log(result);

/*     ws.write(result + "\n");

    ws.end(); */
}
