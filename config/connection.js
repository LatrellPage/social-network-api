const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost/social-network'; // Replace with your MongoDB connection URL

// Connect to the database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });