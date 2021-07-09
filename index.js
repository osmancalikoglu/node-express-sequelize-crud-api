const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./database')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true 
}));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/findUser', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/addUser', (request, response) => {
  response.sendFile(path.join(__dirname + '/add_user.html'));
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})