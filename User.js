// models/User.js

const mongoose = require('mongoose');

// Define a schema for users
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Export the model to use in server.js
module.exports = mongoose.model('User', userSchema);
