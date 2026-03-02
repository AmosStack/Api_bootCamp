//app.js
//main application file
//iporting express and dotenv
const express = require('express');
const app = express();
require('dotenv').config();
//importing routes
const userRoutes = require('./routes/UserRoute')

//middleware
app.use(express.json());
app.get('/', (req, res) => {
	res.json({ message: 'API is running' });
});
//routes
app.use('/users',userRoutes)

module.exports = app;
