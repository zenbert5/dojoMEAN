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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let aliceRanks = [];
    for (let a = 0; a < alice.length; a++) {
        let currRank = 1;
        let prevScore = -1;
        for (let scoreIdx = 0; scoreIdx < scores.length; scoreIdx++) {
            // alice's score equals or is greater than current score, 
            // we are done - break loop
            if (alice[a] >= scores[scoreIdx]) {
                console.log(`alice has score ${alice[a]} rank = ${currRank}`);
                aliceRanks.push(currRank);
                break;
            }
            // current score == previous score, keep current rank#
            if (scores[scoreIdx] === prevScore) {
                continue;
            }
            // current score is less than previous (ordered list)
            // update previous score to current score and increment counter
            // increment ranks
            prevScore = scores[scoreIdx];
            currRank++;
            if (scoreIdx === scores.length - 1) {
                console.log(`alice has the bottom ranks - rank # ${currRank}`)
                aliceRanks.push(currRank);
            }
        }
    }
    return aliceRanks;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
