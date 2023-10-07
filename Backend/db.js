const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/inotebook';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('Connection successful');
  } catch (error) {
    console.error('Connection failed:', error);
  }
};

module.exports = connectToMongo;
