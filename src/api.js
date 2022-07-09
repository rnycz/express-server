const bodyParser = require('body-parser')
const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded())

router.get("/", (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200)
    res.send("<h1>Welcome on Server</h1>")
    const rowNumber = req.body
    console.log("Rows: ", rowNumber)
  });
  
  
  router.post('/update',(req,res) => {
    const rowNumber = req.body
    console.log("Rows: ", rowNumber)
    res.sendStatus(200);
  })
  
  app.use(`/.netlify/functions/api`, router);
  
  module.exports = app;
  module.exports.handler = serverless(app);