// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema
({
    name: {
       type: String,
       required: true,
},
 email: {
 type: String,
 required: true,
 unique: true,
 lowercase: true,
},
password: {
    type: String,
    required: true,
},
});

module.exports = mongoose.model('Stud', userSchema);



//  // Correcting the issue
// const User = require('../models/User'); // Make sure you import the User model

// const emp = new User({
//     name: "sonu",
//     email: "sonu@example.com",
//     password: "password123"
// });

// emp.save()
//     .then(() => console.log('User saved successfully'))
//     .catch((error) => console.error('Error saving user:', error));
// const emp2 = new User({
//     name: "sonu",
//     email: "sonu@example.com",
//     password: "password123"
//     });
// emp2.save();
