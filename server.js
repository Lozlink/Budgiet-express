const express = require('express')
const app = express()
const PORT =  8080;

const sessions = require('./middlewares/sessions')

const transactionsController = require('./controllers/transactions_controllers')
const usersController = require('./controllers/users_controllers')
const sessionsController = require('./controllers/sessions_controller')

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

app.use(express.json())

app.use(sessions)

app.use('/api/users', usersController)
app.use('/api/transactions', transactionsController)
app.use('/api/sessions', sessionsController)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}