var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post('/add', function (req, res) {
  console.log('request recieved for addition')
  var numbers = ((req.body.numbers).split(','));
  res.status(200).send('{sum:'+(parseInt(numbers[0])+parseInt(numbers[1]))+'}')
})


app.post('/subtract', function (req, res) {
  console.log('request recieved for subtraction')
  var numbers = ((req.body.numbers).split(','));
  res.status(200).send('{difference:'+(parseInt(numbers[0])-parseInt(numbers[1]))+'}')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
