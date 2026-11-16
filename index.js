const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.post('/api/chat', (req, res) => {
    try {
        const { messages } = req.body   ;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages harus berupa array' });
        }

        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`, 
                {
                    method: 'POST',
                    
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                    },
                    