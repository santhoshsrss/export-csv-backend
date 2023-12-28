// models/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentID: Number,
  firstName: String,
  lastName: String,
  mobileNumber: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
