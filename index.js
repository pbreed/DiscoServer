const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/jtest', (req, res) => {
app.set('json spaces', 40);
res.json(req.toString())
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

