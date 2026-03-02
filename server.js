//server.js
//entry point of the application
const app  = require('./app');

//start server
const PORT  = process.env.PORT;

//listen on port
app.listen(PORT, () => {
    console.log('Server is running on port',PORT);
});