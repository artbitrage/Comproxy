#!/usr/bin/env node
'use strict'
const app = require('express')()
const authenticate = require('./src/authenticate')

app.enable('trust proxy')
app.get('/', authenticate)

app.get('https://academic.syafiqhadzir.dev/Favicons/apple-touch-icon.png', (_req, res) => res.status(204).end())

app.listen(3000)