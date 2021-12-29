const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

const envName = getEnv()

// 载入 process.env
const envConfig = dotenv.config()

// 读取变量
const config = envConfig.parsed || {}

console.log('==== current config ====')
console.log(config)

const filePaths = getHtmlPaths()

writeHtml(filePaths)

console.log(`replace ${envName} successful!!`)

function writeHtml(filePaths) {
  filePaths.forEach((path) => {
    const html = fs.readFileSync(path, 'utf-8')
    fs.writeFileSync(path, replaceHtml(html, config), 'utf-8')
  })
}

function replaceHtml(html, config) {
  const configPlaceholder = /<!-- config start -->[\s\S]*?<!-- config end -->/

  const renderConfig = (config) => `
<script>
  window.CONFIG = ${JSON.stringify(config)}
</script>
    `

  // config
  html = html.replace(configPlaceholder, renderConfig(config))

  return html
}

function getHtmlPaths() {
  const ROOT_DIR = path.join(__dirname, './')

  const HTML_PATH = path.join(ROOT_DIR, './index.html')

  return [HTML_PATH]
}

function getEnv() {
  return `.env`
}