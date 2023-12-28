// controllers/jsonDataController.js

const Student = require('../models/jsonDataModel');

const uploadJsonData = async (req, res) => {
  const jsonData = req.body;

  try {
    // Assuming jsonData is an array of student objects
    const savedData = await Student.create(jsonData);

    // Extracting only relevant data to send back in the response
    const responseData = savedData.map(({ _id, studentID, firstName, lastName, mobileNumber }) => ({
      _id,
      studentID,
      firstName,
      lastName,
      mobileNumber,
    }));

    res.status(201).json(responseData);
  } catch (error) {
    console.error('Error saving JSON data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  uploadJsonData,
};
