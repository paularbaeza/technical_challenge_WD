//connect to the database
require("../db");

//get the data
const phones = require("./phones.json")



const Phone = require("../models/Phone.model");

async function storePhones () {
  try {
    await Phone.insertMany(phones);
    console.log("Phones added to the BD");
  } catch (err) {
    console.log("Error adding the phones", err);
  }
};

storePhones();