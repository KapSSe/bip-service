const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    telephone: String,
    offers: Boolean
  });

  module.exports = userSchema;
  