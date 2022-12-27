const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//ROUTES//
app.use(cors())
app.use(express.json())
app.get('/api', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM public.question_one_shifts')
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server started on port 5000')
})
