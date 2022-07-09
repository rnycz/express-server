const bodyParser = require('body-parser')
const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

router.get("/", (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200)
    res.send("<h1>Welcome on Server</h1>")
  });
  
  
  router.post('/update',(req,res) => {
    const rowNumber = req.body.rownumber
    console.log("Rows: ", rowNumber)
    res.end()
  })
  
  app.use(`/.netlify/functions/api`, router);
  
  module.exports = app;
  module.exports.handler = serverless(app);