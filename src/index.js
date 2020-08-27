const R = require('ramda')
const fs = require('fs')
const path = require('path')
const os = require('os')
const filename = path.join(__dirname, '..', '2019', '03-March-2019.md')
const file = fs.readFileSync(filename, 'utf8')

const isTask = line => line.startsWith('- ')
const hasTag = line => line.includes('@')
const lines = file.split(os.EOL).filter(isTask).filter(hasTag)
console.log(lines)
console.log('%d lines', lines.length)

