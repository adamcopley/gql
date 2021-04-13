const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

module.exports = mongoose;