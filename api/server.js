const bodyParser = require('body-parser')
let express = require('express')
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.all("/*", function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

//Routes
app.post('/loanSave', (request, response)=>{
    let Loan = require('./models/Loan')
    Loan.create(request.body, (result)=>{
        console.log(result)
    })
})

app.listen(3000)