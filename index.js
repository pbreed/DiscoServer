const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/register', (req, res) => {
  var now=new Date();
  res.send('Version 4 get shown at '+now.toString())
})
app.post('/post', (req, res) => {
  var now=new Date();
  res.send('Version 5 post shown at '+now.toString())
})
app.listen(3000, () => console.log('Server running on port 3000'))

