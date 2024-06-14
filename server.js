const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const staffRoute = require('./routes/staffRouter');
const serviceRoute = require('./routes/serviceRouter');


const app = express();
const port = 5000;


//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to mongdoDB
const dbURL = process.env.MONGODB_URI;
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port),
        console.log(`Server is running at port ${port}`),
        console.log('Connected to mongodb atlas')
    })
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('<h1>Welcome back</h1>');
});

/* app.use('/staffs', staffRoute); */
app.use('/services', serviceRoute);