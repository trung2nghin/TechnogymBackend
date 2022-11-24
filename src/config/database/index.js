const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: 'majority', j: true, wtimeout: 1000 },
    });
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.log('Connect fail', error);
  }
}

module.exports = { connect };
