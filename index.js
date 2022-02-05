const fs = require('fs')
const readline = require('readline')
const readFileLocation = './ids-accordion.js'
const input = fs.createReadStream(readFileLocation)
const output = './ids-doc.txt'
let counter = 0
const rl = readline.Interface( { input } )

fs.unlink(output, () => console.log('unlinked...'))

rl.on('line', line => {
    counter++
    if(line.includes('* @')){
        console.log(line, counter)
        fs.appendFile(output, `${line}\n`, 'utf-8', () => console.log('Ids Doc completed...'))
    }
})