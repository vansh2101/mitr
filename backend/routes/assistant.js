const express = require('express')
const OpenAIApi = require('openai');

require('dotenv').config()


//? Global vars
const router = express.Router()

const openai = new OpenAIApi({
    key: process.env.OPENAI_API_KEY,
  });


//? Routes
router.get('/', (req, res) => {
    res.send('Assistant API')
})


router.post('/msg', async (req, res) => {
    const {prompt} = req.body

    const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo',
        prompt: prompt,
        temperature: 0.5,
    })

    res.json(completion.choices[0].text)
})


//? Exporting Routes
module.exports = router