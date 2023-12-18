const express = require('express')
const cors = require('cors')


//? Global vars
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({origin: '*'}))


//? Routes
app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/userData'))
app.use('/assistant', require('./routes/assistant'))


//? Initializing server
app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000')
})