const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/jtest', (req, res) => {
/*app.set('json spaces', 40);*/
r1={};
r1.ip='10.1.1.86';
r1.mac='00:01:02:03:04:05';
r1.time=new Date();

r2={};
r2.ip='10.1.1.75';
r2.mac='00:11:22:33:44:55';
r2.time=new Date();
a1=[r1,r2];
result={a1};

res.json(result);
})
app.get('/register', (req, res) => {
  var now=new Date();
  res.send('Version 4 get shown at '+now.toString()+' from '+req.get('X-Real-IP').toString())
})

app.post('/post', (req, res) => {
  response_obj ={};
  response_obj.LocalIp = req.body.LocalIp;
  response_obj.Mac = req.body.Mac;
  response_obj.AppName=req.body.AppName;
  response_obj.Platform=req.body.Platform;
  response_obj.when=new Date();
  res.send(' Tried to parse'+ response_obj.when.toString()+ 'IP'+response_obj.LocalIp);
})

app.post('/post2', (req, res) => {
r1={};
r1.ip='10.1.1.86';
r1.mac='00:01:02:03:04:05';
r1.time=new Date();

r2={};
r2.ip='10.1.1.75';
r2.mac='00:11:22:33:44:55';
r2.time=new Date();
a1=[r1,r2];
result={a1};
res.json(result);
})


app.listen(3000, () => console.log('Server running on port 3000'))

