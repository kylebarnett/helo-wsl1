const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const controller = require('./controller');
require('dotenv').config()
const cors = require('cors')

const app = express()
const port = 4007

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Hogwarts')
})

app.use(express.static(`${__dirname}/../build`))

app.use(cors());
app.use(bodyParser.json())

app.get('/api/users', controller.users)
app.post('/api/auth/login', controller.login)
app.post('/api/auth/register', controller.register)

app.listen(port, () => {
  console.log('Its the weekend Harry', port)
})