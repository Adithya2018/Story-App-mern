const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// HTTP request logger
app.use(morgan('tiny'));

// Routes

app.get('/api', (req, res) => {
    const data = {
        username: "Adithyan",
        age: 21
    }
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: "Kevin",
        age: 23
    }
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));