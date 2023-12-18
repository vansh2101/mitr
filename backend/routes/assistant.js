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

    const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        temperature: 0.5,
        messages: [{"role": "user", "content": prompt}],
    })

    res.json(completion.choices[0].message.content)
})


//? Exporting Routes
module.exports = router