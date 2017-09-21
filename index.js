const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/jtest', (req, res) => {
app.set('json spaces', 40);
r1={};
r1.t1='Fred';
r1.t2='Bob';
r1.t3=1234;

r2={};
r2.t1='Bill';
r2.t2='George';
r2.t3=999;

a1=[r1,r2];


res.json(a1)
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

