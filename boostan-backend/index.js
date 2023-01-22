const express = require('express')
const mongoose = require('mongoose')

//import  bodyParser from 'body-parser';
const get_all_courses_router = require('./routes/all_available_courses')

const app = express()
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use('/all_courses/', get_all_courses_router);

mongoose.connect("mongodb://localhost:27017/boostan", {
  useNewUrlParser: true
});

// callback when connection to mongodb is open
mongoose.connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(3000, () => console.log('listening on port 3000 ...'))

module.exports= app;