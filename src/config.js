const configDev = {
  secure: true,
  url: 'localhost',
}

const configProd = {
  secure: true,
  url: 'ENTER_URL_HERE',
}

module.exports = process.env.NODE_ENV === 'production' ? configProd : configDev
