const express = require('express')
const mongoose = require('mongoose')

var cors = require('cors');

const get_all_courses_router = require('./routes/all_available_courses')
const get_my_courses_router = require('./routes/my_courses')
const post_preregister = require('./routes/register')

const app = express()

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));

app.use(express.json())

app.use('/all_courses/', get_all_courses_router);
app.use('/my_courses/', get_my_courses_router);
app.use('/preregister/', post_preregister);

mongoose.connect("mongodb://localhost:27017/boostan", {
  useNewUrlParser: true
});

mongoose.connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(3000, () => console.log('listening on port 3000 ...'))

module.exports= app;