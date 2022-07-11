const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const app = express()

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const rows = []
let idCounter = rows.length

router.get("/", (req, res) => {
  try{
    const result = rows[rows.length - 1].rowsnumber
    res.send(`<h2>Serwer</h2>
    <div>Liczba wierszy:  ${result}</div>`);
  }catch(error){
    res.send(`<h2>Serwer</h2>
    <div>Lista jest pusta - odśwież automat</div>
    <div>${error}</div>`).status(500)
  }
});
  
  router.post('/update', (req,res) => {
    const row = {
      id: ++idCounter,
      rowsnumber: req.body.rowsnumber - 1
    }
    rows.push(row)
    res.status(201)
  })
  
  app.use(`/.netlify/functions/api`, router);
  
  module.exports = app;
  module.exports.handler = serverless(app);