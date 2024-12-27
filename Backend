const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Hardcoded answers for simplicity
const correctAnswers = {
    1: 'securepassword123', // Example answer for Q1
    2: 'Hello, World!', // Example answer for Q2
};

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (like the pcap file)

// API endpoint for answer validation
app.post('/validate', (req, res) => {
    const { answer, questionId } = req.body;

    if (answer === correctAnswers[questionId]) {
        res.json({ correct: true });
    } else {
        res.json({ correct: false });
    }
});

// Serve the HTML dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
