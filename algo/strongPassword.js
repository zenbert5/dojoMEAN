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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = /[0-9]/g;
    const lower_case = /[a-z]/g;
    const upper_case = /[A-Z]/g;
    // trick question, minus sign has to be escaped (backslash)
    const special_characters = /[!@#$%^&*()\-+]/g;

    // set cost, if complexity condition met, remove cost
    let num = 1, lCase = 1, uCase = 1, sChar = 1;
    // iterate password to identify makeup
    for (let i = 0; i < n; i++) {
        if (password[i].match(numbers)) {
            num = 0;
        } else if (password[i].match(lower_case)) {
            lCase = 0;
        } else if (password[i].match(upper_case)) {
            uCase = 0;
        } else if (password[i].match(special_characters)) {
            sChar = 0;
        }
    }

    // if password is greater or eq 6, only missing condition needes to be added
    if (password.length >= 6) {
        return num + lCase + uCase + sChar;
    } else {
        // if less than 6 char in password, determine which cost is higher, missing char or complexity 
        let minCharRequired = 6 - password.length;
        let conditionsNotMet = num + lCase + uCase + sChar;
        if (minCharRequired >= conditionsNotMet) {
            return minCharRequired;
        } else {
            return conditionsNotMet;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
