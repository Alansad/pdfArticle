const http = require('http')
const url = require('url')
const querystring = require("querystring")

const {getHtml, exportPdf} = require('./utils/htmlToPdf')

http.createServer(async (request, response) => {
  const {query, pathname} = url.parse(request.url)
  const {title} = querystring.parse(query)
  if (pathname === '/') {
    response.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Access-Control-Allow-Origin': '*'
    })
    const html = getHtml({title})
    const pdf = await exportPdf(html)
    response.end(pdf)
  }
}).listen(8888)
