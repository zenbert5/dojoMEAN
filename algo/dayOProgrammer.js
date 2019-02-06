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

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    let leapYearDDay = '12.09.';
    let nonLeapYearDDay = '13.09.';

    // year 1918 - outlyer condition 
    if (year === 1918) {
        return '26.09.1918';
    }

    // year < 1918
    if (year < 1918) {
        if (year % 4 === 0) {
            return leapYearDDay + year.toString();
        } else {
            return nonLeapYearDDay + year.toString();
        }
    }

    // gregorian calendar check if leap year
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return leapYearDDay + year.toString();
    } else {
        return nonLeapYearDDay + year.toString();
    }
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    console.log('result = ', result);

/*     ws.write(result + '\n');

    ws.end(); */
}
