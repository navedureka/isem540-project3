var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())


app.post('/add', function (req, res) {
  app.use(bodyParser.json());
  console.log('request recieved for addition')
  console.log(req.body)
  //var numbers = req.body.split(',');
  //  console.log(numbers[0]+numbers[1])

  res.send(req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
