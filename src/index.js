const R = require('ramda')
const fs = require('fs')
const path = require('path')
const os = require('os')

const getYear = (monthLabel) => monthLabel.split('-')[2]

function countMonth(monthLabel) {
  const year = getYear(monthLabel)
  const filename = path.join(__dirname, '..', year, monthLabel + '.md')
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
  // console.log(counted)

  return counted
}


const monthLabels = [
  '03-March-2019',
  '04-April-2019',
  '05-May-2019',
  '06-June-2019',
  '07-July-2019',
  '08-August-2019',
  '09-September-2019',
  '10-October-2019',
  '11-November-2019',
  '12-December-2019',
  '01-January-2020',
  '02-February-2020',
  '03-March-2020',
  '04-April-2020',
  '05-May-2020',
  '06-June-2020',
  '07-July-2020',
  '08-August-2020'
]

const counts = monthLabels.map(countMonth)
console.log(counts)
