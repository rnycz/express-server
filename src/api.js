const bodyParser = require('body-parser')
const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()

router.get("/", (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200)
    res.send("<h1>Welcome on Server</h1>")
    const rowNumber = req.body.row_number
    res.send(`Liczba wierszy: ${rowNumber}`)
  });
  
  
  router.post('/update',(req,res) => {
      res.json({
          hello: "hit the POST!"
        });
  })
  
  app.use(`/.netlify/functions/api`, router);
  
  module.exports = app;
  module.exports.handler = serverless(app);