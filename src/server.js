const appModel = require('./appModel')

const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/application', (req, res) => {
  console.log('post to /application', req.body)
  appModel.create(req.body, (err, result) => {
    if(err) {
      res.json({success: false, err: err})
    } else {
      res.json({success: true, data: result})
    }
  })
})

app.get('/application/:appKey', (req, res) => {
  console.log('get /application', req.params.appKey)
  appModel.find(req.params.appKey, (err, result) => {
    if(err) {
      res.json({success: false, err: err})
    } else {
      res.json({success: true, data: result})
    }
  })
})

const port = parseInt(process.env.PORT) + 1
app.listen(port, () => {console.log('server started ' + port)})

