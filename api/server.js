const bodyParser = require('body-parser')
let express = require('express')
let app = express()

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Routes
app.post('/', (request, response)=>{
    console.log(request.body)
    let Loan = require('./models/Loan')
    Loan.create(request.body, (result)=>{
        console.log(result)
    })
})

app.listen(3000)