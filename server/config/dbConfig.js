const mongoose = require('mongoose');
// mongoose.set('strictQuery',false)
// mongoose.connect(process.env.mongo_url)
// const connection = mongoose.connection;

// connection.on('connected' , ()=> {
//   console.log('connected');
// })
// connection.on('error' , (err)=> {
//   console.log('failed');
// })



// MongoDB Atlas connection string with `mongodb+srv`
const uri = 'mongodb+srv://thuraka3:nithin8844@cluster0.6fmrz5d.mongodb.net/seatsmart';

//Connect to MongoDB Atlas using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });



// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// mongoose.connect(process.env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;

// connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// connection.on('error', (err) => {
//   console.log('Failed to connect to MongoDB', err);
// });