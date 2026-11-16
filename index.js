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
        const { message } = req.body.message;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages harus berupa array' });
        }