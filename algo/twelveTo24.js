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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    // test AM PM
    const re = new RegExp('^.{8}PM$');
    const isPM = re.test(s);
    let hourMinSec = s.substring(0, 8).split(':');
    let hour = parseInt(hourMinSec[0])
    if (isPM && hour != 12) {
        hour += 12;
        if (hour > 23) {
            hourMinSec[0] = '00';
        } else {
            hourMinSec[0] = hour.toString();
        }
    } else if (isPM && hour == 12) {
        hourMinSec[0] = '12';
    } else {
        if (hour == 12) {
            hourMinSec[0] = '00';
        }
    }
    return hourMinSec[0] + ':' + hourMinSec[1] + ':' + hourMinSec[2];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
