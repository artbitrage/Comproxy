const auth = require('basic-auth')
const LOGIN = process.env.LOGIN
const PASSWORD = process.env.PASSWORD

function authenticate(req, res, next) {
    if (LOGIN && PASSWORD) {
        const credentials = auth(req)
        if (!credentials || credentials.name !== LOGIN || credentials.pass !== PASSWORD) {
            res.setHeader('WWW-Authenticate', `Basic realm="UiTM Comproxy™ - Progressive Compression Proxy Server"`)

            return res.status(401).end('Access denied')
        }
    }

    next()
}

module.exports = authenticate