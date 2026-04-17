const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date
});