const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

// Routes

router.get('/', (req, res) => {
    
    BlogPost.find({ })
    .then( (data) => {
        console.log('Data: ' + data);
        res.json(data);
    })
    .catch( (error) => {
        console.log('Error: ' + error);     
    });

});

router.post('/save', (req, res) => {
    
    console.log('Body: ', req.body);
    
    res.json({
        msg: "We recieved your data!"    
    });

});

router.get('/name', (req, res) => {
    const data = {
        username: "Kevin",
        age: 23
    }
    res.json(data);
});

module.exports = router;