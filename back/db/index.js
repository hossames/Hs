require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_KEY).then(() => {
    console.log('Connected to MongoDB');
}).catch(() => {
    console.log('Failed to connect to MongoDB')
});

module.exports = mongoose;