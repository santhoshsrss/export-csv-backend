// services/jsonDataService.js

const jsonDataModel = require('../models/jsonDataModel');

const saveJsonData = async (jsonData) => {
  try {
    const savedData = await jsonDataModel.create(jsonData);
    return savedData;
  } catch (error) {
    console.error('Error saving JSON data:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  saveJsonData,
};
