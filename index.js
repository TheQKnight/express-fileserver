const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, './public')))

try {
  const sslKey = fs.readFileSync(path.join(__dirname, './ssl/key.pem'))
  const sslCert = fs.readFileSync(path.join(__dirname, './ssl/cert.pem'))
  https.createServer({ key: sslKey, cert: sslCert }, app).listen(443)
  console.log('HTTPS server listening on port 443')
} catch (err) {
  console.log('Could not initialize HTTPS server. Using HTTP only.')
}
http.createServer(app).listen(80)
console.log('HTTP server listening on port 80')
