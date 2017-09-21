const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
  var now=new Date();
  res.send('Version4 shown at '+now.toString())
})
app.listen(3000, () => console.log('Server running on port 3000'))

