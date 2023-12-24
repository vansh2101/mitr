const express = require('express')
const OpenAIApi = require('openai');
const fs = require('fs');

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


router.post('/code', async (req, res) => {
  const {prompt} = req.body
  const thread = await openai.beta.threads.create();

  

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: prompt,
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    { 
      assistant_id: 'asst_Tl0hriDTNDC0vrSrbLqMhe0V'
    }
  );

  var runs = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );

  while (runs.status === 'in_progress') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    runs = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );
  }

  const messages = await openai.beta.threads.messages.list(
    thread.id
  );

  res.json(messages.data[0].content[0].text.value)
})


router.post('/generate', async (req, res) => {
  const {prompt} = req.body
  const thread = await openai.beta.threads.create();

  

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: prompt,
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    { 
      assistant_id: 'asst_DqSn33sJ4IfVGfhgg24ajVyH'
    }
  );

  var runs = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );

  while (runs.status === 'in_progress') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    runs = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );
  }

  const messages = await openai.beta.threads.messages.list(
    thread.id
  );

  res.json(messages.data[0].content[0].text.value)
})



router.post('/image', async (req, res) => {
  const {prompt} = req.body

  const thread = await openai.beta.threads.create();

  const file = await openai.files.create({
    file: fs.createReadStream(prompt),
    purpose: "assistants",
  });

  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      file_ids: [file.id],
    }
  );

  const run = await openai.beta.threads.runs.create(
    thread.id,
    { 
      assistant_id: 'asst_tsVKdxIAf18rM6mlBB5pBu4t'
    }
  );

  const fileDeletionStatus = await openai.beta.assistants.files.del(
    'asst_tsVKdxIAf18rM6mlBB5pBu4t',
    file.id
  );

  var runs = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );

  while (runs.status === 'in_progress') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    runs = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );
  }

  const messages = await openai.beta.threads.messages.list(
    thread.id
  );

  res.json(messages.data[0].content[0].text.value)
})


//? Exporting Routes
module.exports = router