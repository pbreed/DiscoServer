const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/jtest', (req, res) => {
app.set('json spaces', 40);
r1={};
r1.ip='10.1.1.86';
r1.mac='00:01:02:03:04:05';
r1.time=new Date();

r2={};
r2.ip='10.1.1.75';
r2.mac='00:11:22:33:44:55';
r2.time=new Date();
a1=[r1,r2];
res.json('{"result:"'+JSON.stringify(a1)+'}');
})
app.get('/register', (req, res) => {
  var now=new Date();
  res.send('Version 4 get shown at '+now.toString()+' from '+req.get('X-Real-IP').toString())
})
app.post('/post', (req, res) => {
  var now=new Date();
  res.send('Version 5 post shown at '+now.toString())
})
app.listen(3000, () => console.log('Server running on port 3000'))

