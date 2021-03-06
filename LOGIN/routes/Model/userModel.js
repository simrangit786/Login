const mongoose = require('mongoose');
//const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide us email'],
    unique: true,
    lowercase: true,
    //validate: [validator.isEmail, 'Please provide a valid email'],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    /*
    validate: {
      //This only works on save
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
    */
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
