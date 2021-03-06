const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()
// Step 1
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://Adi:JJWaGAnUDMQAEick@cluster0.k9z4b.mongodb.net/Stories?retryWrites=true&w=majority'

// Step 2
mongoose.connect(MONGODB_URI || 'mongodb://localhost/storyApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected!!!');
});


// Dummy values 
// //Saving data to our mongo database
// const data = {
//     title: "1. The Boy Who Cried Wolf",
//     body: "Once upon a time, there lived a shepherd boy who was bored watching his flock of sheep on the hill. To amuse himself, he shouted, “Wolf! Wolf! The sheep are being chased by the wolf!” The villagers came running to help the boy and save the sheep. They found nothing and the boy just laughed looking at their angry faces."
// };

// // const newBlogPost = new BlogPost(data); // instance of the model

// // .save()
// // newBlogPost.save((error) => {
// //     if(error){
// //         console.log("This is embarassing!");
// //     }
// //     else{
// //         console.log("Data has been saved!!");
// //     }
// // });

// changes the req to json or urlencoded 
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes);

// Step 3
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));