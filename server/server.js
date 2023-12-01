require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 60000
const connectDB = require('./database')

connectDB()


app.use(cors())
app.use(express.json())


app.use('/api/users', require('./route/userRoute'))

app.use('/api/stock', require('./route/crud'));

app.get('/', (req, res) => {
    res.json({message: `Server is running at port:${port}`})
})


app.listen(port, () => {
    console.log(`SERVER running on Port: ${port}`)
})