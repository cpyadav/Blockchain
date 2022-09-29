'use strict';

var express = require('express');
var app = express();
const Web3 = require('web3')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.set("port", process.env.PORT || 4000);

app.get('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/:createaccount', function (req, res) {
   const Web3 = require('web3')
   const web3 = new Web3('HTTP://127.0.0.1:7545')
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = web3.eth.accounts.create()
   console.log(web3.eth.accounts.create());
   res.end(JSON.stringify(response));
})
app.get('/getAccounts', function (req, res) {
   const Web3 = require('web3')
   const web3 = new Web3('HTTP://127.0.0.1:7545')
   res.writeHead(200, {'Content-Type': 'application/json'});
  // var response = web3.eth.getAccounts();
   web3.eth.getAccounts().then(result=>{
      res.end(JSON.stringify(result));
   })
})
app.post('/balance/getBalance', function (req, res) {
   const Web3 = require('web3')
   const web3 = new Web3('HTTP://127.0.0.1:7545')
   res.writeHead(200, {'Content-Type': 'application/json'});
   var data = req.body;
   console.log(data);
   //web3.eth.getBalance('0x6e35A20a740bC7288bdec5d4E138a253D4A72660') .then(console.log)
   web3.eth.getBalance(data.account).then(result=>{
      res.end(JSON.stringify(result));
   })
})


app.post('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is POST method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.put('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is PUT method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.delete('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is DELETE method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
