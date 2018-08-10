const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 4007

app.use(bodyParser.json())

app.listen(port, () => {
  console.log('Its the weekend Harry', port)
})