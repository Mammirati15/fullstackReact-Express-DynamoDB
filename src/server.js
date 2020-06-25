const appModel = require('./appModel')

const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')
const db = require('./db')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/applications', (req, res) => {
  console.log('post to /application', req.body)
  appModel.create(req.body, (err, result) => {
    if(err) {
      res.json({success: false, err: err})
    } else {
      res.json({success: true, data: result})
    }
  })
})

app.get('/applications/:appKey', (req, res) => {
  console.log('get /applications', req.params.appKey)
  appModel.find(req.params.appKey, (err, result) => {
    if(err) {
      res.json({success: false, err: err})
    } else {
      res.json({success: true, data: result})
    }
  })
})

app.get('/campsites', (req, res) => {
  res.json(db.campsites)
})

app.get('/comments', (req, res) => {
  res.json(db.comments)
})

app.get('/promotions', (req, res) => {
  res.json(db.promotions)
})

app.get('/partners', (req, res) => {
  res.json(db.partners)
})

app.post('/feedback', (req, res) => {
  res.json(db.feedback)
})

app.use(express.static('public'))

const port = parseInt(process.env.PORT) + 1
app.listen(port, () => {console.log('server started ' + port)})

