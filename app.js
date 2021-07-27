const express = require('express');

const app = express();

app.use('/notifications', require('./routes/api/notifications'))
app.use('/birds', require('./routes/api/timelog'))

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server listening at ${PORT}`))