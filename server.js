#!/usr/bin/env node
import express from 'express'
const app = express()
 
app.get('/', function (_req, res) {
  res.send('Hello World')
})
 
app.listen(3000)