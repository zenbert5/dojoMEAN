const fs = require('fs')

fs.readFile('sampleFile.txt', 'utf8', (err, data) => {
    console.log(typeof data, data)
    let lines = data.split('\n')
    console.log(typeof lines)

    lines.forEach(line => {
        console.log(line)
        line.replace('\r', '')
    })
/*     var newLines = lines.replace(/(\r)/gm, '')
    console.log(newLines) */
    console.log(lines)

    const chicken = lines.filter(line => {
        return line.includes('chicken')
    })

    console.log(chicken)
})