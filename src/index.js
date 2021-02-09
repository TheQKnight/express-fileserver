const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')

const config = require('./config')

const app = express()

app.use('/', express.static(path.join(__dirname, '../public')))

if (config.secure) {
  const sslKey = fs.readFileSync(path.join(__dirname, '../ssl/key.pem'))
  const sslCert = fs.readFileSync(path.join(__dirname, '../ssl/cert.pem'))
  https.createServer({ key: sslKey, cert: sslCert }, app).listen(443)
  console.log('HTTPS server listening on port 443')
}
http.createServer(app).listen(80)
console.log('HTTP server listening on port 80')
