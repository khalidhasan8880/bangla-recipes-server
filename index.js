const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

const data = require('./data/recipes.json')
app.get('/', (req, res) => {
  res.send(data)
})
app.get('/recipe/:id', (req, res) => {
  const id  = req.params.id;
  const item = data.recipes.find(recipe=> recipe.id == id)
  res.send(item)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})