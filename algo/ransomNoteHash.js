'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    const magHash = {}, noteHash = {};
    let key;

    var djb2 = function (string) {
        var h = 5381;
        var i = 0;
        for (i = 0; i < string.length; i++) {
            var ascii = string.charCodeAt(i);
            h = ((h << 5) + h) + ascii;
        }
        return (h & 0xffffffffff).toString(16);
    }

    // hash magazine
    for (let word in magazine) {
        key = djb2(magazine[word]);
        if (key in magHash) {
            magHash[key].val++;
        } else {
            magHash[key] = {
                word: magazine[word],
                val: 1,
                next: null
            };
        }
    }

    // hash note
    for (let word in note) {
        key = djb2(note[word]);
        if (key in noteHash) {
            noteHash[key]++;
        } else {
            noteHash[key] = 1;
        }
    }
    console.log(magHash);
    console.log(noteHash);

    for (let x in noteHash) {
        console.log(x, x in magHash);
        if (!(x in magHash)) {
            console.log('No');
            return;
        // validate hash occurrences magazine exceed note requirements
        } else if (magHash[x] < noteHash[x]) {
            console.log('No');
            return;
        }
    }
    console.log('Yes');
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);

}
