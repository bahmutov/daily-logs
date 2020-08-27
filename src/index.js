const R = require('ramda')
const fs = require('fs')
const path = require('path')
const os = require('os')
const filename = path.join(__dirname, '..', '2019', '03-March-2019.md')
const file = fs.readFileSync(filename, 'utf8')

const isTask = line => line.startsWith('- ')
const hasTag = line => line.includes('@')
const lines = file.split(os.EOL).filter(isTask).filter(hasTag)

const lineToTagged = line => {
  const reg = /.* @(example|feature|internal|support|slides|presentation|learning|hiring|blog)$/
  const matches = reg.exec(line)
  if (!matches) {
    throw new Error(`Invalid line "${line}"`)
  }

  return {
    line: matches[0].trim(),
    tag: matches[1].trim()
  }
}

// console.log(lines)
// console.log('%d lines', lines.length)

const tags = lines.map(lineToTagged)
// console.log(tags)
// console.log(lines)
// console.log('%d lines', lines.length)

const grouped = R.groupBy(R.prop('tag'), tags)
// console.log(grouped)
const counted = {}
Object.keys(grouped).forEach(tag => {
  counted[tag] = grouped[tag].length
})
console.log(counted)
