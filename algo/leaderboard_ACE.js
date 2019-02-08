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
    // setup rank
    const rankedScores = [];
    let rank = 1;
    let prevScore = -1;
    for (let t = 0; t < scores.length; t++){
        if (scores[t] === prevScore) {
            continue;
        } else {
            let obj = {
                value: scores[t],
                rank: rank
            }
            rankedScores.push(obj);
            prevScore = scores[t];
            rank++;
        }
    }

    const result = [];
    let currPos = rankedScores.length - 1;
    for (let a = 0; a < alice.length; a++) {
        while(currPos >= 0) {
            // alice's score is less than the current position value, increment rank
            console.log(rankedScores[currPos].value, rankedScores[currPos].rank);
            if (alice[a] < rankedScores[currPos].value) {
                result.push(rankedScores[currPos].rank + 1);
                break;
            } else if (alice[a] === rankedScores[currPos].value) {
                result.push(rankedScores[currPos].rank);
                break;
            } else if (alice[a] > rankedScores[currPos].value && currPos === 0) {
                result.push(1)
                break;
            } else {
                currPos--;
            }
        }
    }
    return result;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    console.log(result.join('\n') + '\n');
/*     ws.write(result.join("\n") + "\n");

    ws.end(); */
}
