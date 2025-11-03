require('dotenv').config(); // must be at the top of the file
const mongoose = require('mongoose');

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log('MongoDB Connected Successfully!');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error);
  }
};

Connection();

module.exports = Connection;
