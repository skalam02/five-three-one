var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fto = require('./views/531.js')

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")


app.listen(3000,'localhost', function() {
  console.log("server started");
})

app.get('/', function(req,res) {
  res.render('oneRepInput');
})

app.post('/', function(req,res) {
  var squat = parseInt(req.body.squat)
  var deadLift = parseInt(req.body.deadLift)
  var overheadPress = parseInt(req.body.overheadPress)
  var benchPress = parseInt(req.body.benchPress)
  var exercises = {squat,deadLift,overheadPress,benchPress}

  var month = fto.entireMonth('Squat',squat,'Deadlift',deadLift,'Overhead Press',overheadPress,'Benchpress',benchPress)
  month.forEach(function(week) {
    console.log(week)
  })
  res.render('fivethreeone', {month:month})
})
