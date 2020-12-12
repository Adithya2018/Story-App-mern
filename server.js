const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://Adi:JJWaGAnUDMQAEick@cluster0.k9z4b.mongodb.net/Stories?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/storyApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected!!!');
});

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   title: String,
   body: String,
   date: {
       type: String,
       default: Date.now()
   } 
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

//Saving data to our mongo database
const data = {
    title: "1. The Boy Who Cried Wolf",
    body: "Once upon a time, there lived a shepherd boy who was bored watching his flock of sheep on the hill. To amuse himself, he shouted, “Wolf! Wolf! The sheep are being chased by the wolf!” The villagers came running to help the boy and save the sheep. They found nothing and the boy just laughed looking at their angry faces."
};

const newBlogPost = new BlogPost(data); // instance of the model

// .save()
// newBlogPost.save((error) => {
//     if(error){
//         console.log("This is embarassing!");
//     }
//     else{
//         console.log("Data has been saved!!");
//     }
// });

// HTTP request logger
app.use(morgan('tiny'));

// Routes

app.get('/api', (req, res) => {
    
    BlogPost.find({ })
    .then( (data) => {
        console.log('Data: ' + data);
        res.json(data);
    })
    .catch( (error) => {
        console.log('Error: ' + error);     
    });

});

app.get('/api/name', (req, res) => {
    const data = {
        username: "Kevin",
        age: 23
    }
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));