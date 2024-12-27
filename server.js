const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Hardcoded answers for simplicity
const answers = {
    networking: {
        0: '199.0.0.0/16',
        1: '199.0.0.1',
        2: '199.0.255.254'
    },
    linux: {
        0: 'binary-name',
        1: 'root',
        2: 'hidden-flag-content'
    },
    redteaming: {
        0: 'compromised-user',
        1: 'secure-password',
        2: '22'
    }
};

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like sample.pcap, linux_dump.tar.gz, etc.

// API endpoint for answer validation
app.post('/validate', (req, res) => {
    const { moduleName, questionIndex, answer } = req.body;

    // Check if the answer matches the hardcoded correct answer
    if (answers[moduleName] && answers[moduleName][questionIndex] === answer) {
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
