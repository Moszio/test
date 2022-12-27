const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] })
})

//ROUTES//

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
