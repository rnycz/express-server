const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.listen(8080, (error) =>{
    if(!error)
        console.log("Server is running!")
    else
        console.log("Error: ",error)
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded())
app.post('/update', (request, response) =>{
    const rowNumber = request.body.row_number
    console.log(rowNumber)
})
app.get('/', (request, response) =>{
    response.set('Content-Type', 'text/html')
    response.status(200)
    response.send("<h1>Welcome on Server</h1>")
})
