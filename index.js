const express = require('express')
const app = express()
app.get('/', (req, res) => {
  vae now=new Date();
  res.send('Version3!'+date.toString())
})
app.listen(3000, () => console.log('Server running on port 3000'))
