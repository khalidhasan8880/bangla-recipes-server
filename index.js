const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

const data = require('./data/chef.json')
app.get('/', (req, res) => {
  res.send(data)
})
app.get('/chef/:id', (req, res) => {
  const id  = req.params.id;
  const chef = data.chefs.find(chef=> chef.id == id)
  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})