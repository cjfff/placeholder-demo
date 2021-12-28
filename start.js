const config = require('dotenv').config()
const { exec } = require('child_process')

const object = config.parsed ?? {}

const valueStr = Object.entries(object).reduce(((arr, [k, v]) => {
    return arr.concat([k, v].join('='))
}, [])).join(' ')

exec(`./replace.sh ${valueStr}`)