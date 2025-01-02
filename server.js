const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Sample data for validation (You can replace this with your actual data)
const answers = {
  module1: {
    question1: 'v**********007@hotmail.com',
    question2: '**********',
    question3: 'aa:bb:cc:dd:11:22'
  },
  module2: {
    question1: 'ls -a',
    question2: '/'
  },
  module3: {
    question1: 'phishing tool name',
    question2: '80'
  }
};

// Validation Endpoints
app.post('/validate', (req, res) => {
  const { module, question, answer } = req.body;
  if (answers[module] && answers[module][question] === answer) {
    res.json({ result: 'Correct' });
  } else {
    res.json({ result: 'Incorrect' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
