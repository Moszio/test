const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./db')

//ROUTES//
app.use(cors())
app.use(express.json())
app.get('/test', async (req, res) => {
  try {
    // const { id } = req.params
    await connection.connect()
    const data = await connection.query('SELECT * FROM question_one_shifts')
    res.json(data.rows)
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
