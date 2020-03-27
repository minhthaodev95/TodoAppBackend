const express = require('express')
const bodyParser = require('body-parser')
const route = require('./router/index')
const mongoose = require('mongoose');
const cors = require('cors')





const app = express()
const port = 3001

app.use(cors())
mongoose.connect('mongodb://localhost:27017/Todo_Db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});




app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/api', route)

app.listen(port, () => console.log(`Todo app listening on port ${port}!`))