const connectToMongo = require('./db');
const express = require('express')
const app = express()
connectToMongo();
const port = 5000
//you have to use it as middleware
app.use(express.json())

app.use('/api/auth' , require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
