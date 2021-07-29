const express = require('express')
require('dotenv').config()
const app = express()
const port = 3005
const IP_SERVER = process.env.IP_SERVER;

app.get('/', (req, res) => {
  res.send(`Hello World from ${IP_SERVER}!, Meto un cambio aqui a ver. Siii! 😀, wooow`)
  // res.set('Content-Type', 'text/html')
  // res.send(Buffer.from('<html><body><img style="width: 100%" src="https://i.imgflip.com/3vbrv7.jpg"></body></html>'))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
