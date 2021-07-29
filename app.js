const express = require('express')
require('dotenv').config()
const app = express()
const port = 3005
const IP_SERVER = process.env.IP_SERVER;

app.get('/', (req, res) => {
  res.send(`Hello World from ${IP_SERVER}!, Meto un cambio aqui a ver`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
