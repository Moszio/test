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
    const data = await connection.query(
      'SELECT * FROM question_one_shifts INNER JOIN facilities ON question_one_shifts.facility_id = facilities.facility_id'
    )
    res.json(data.rows)
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(5000, () => {
  console.log('Server started on port 5000')
})

const arr = [
  { start: '01:00', end: '04:00' },
  { start: '05:00', end: '06:00' },
  { start: '07:00', end: '11:00' },
  { start: '12:30', end: '18:00' },
]
const overlapping = (a, b) => {
  const getMinutes = (s) => {
    const p = s.split(':').map(Number)
    return p[0] * 60 + p[1]
  }
  return (
    getMinutes(a.end) > getMinutes(b.start) &&
    getMinutes(b.end) > getMinutes(a.start)
  )
}
const isOverlapping = (arr) => {
  let i, j
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (overlapping(arr[i], arr[j])) {
        return true
      }
    }
  }
  return false
}
console.log(isOverlapping(arr))
console.log(isOverlapping(arr))
