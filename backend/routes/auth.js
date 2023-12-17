const express = require('express')


//? Global vars
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('Authentication API')
})


//? Exporting Routes
module.exports = router