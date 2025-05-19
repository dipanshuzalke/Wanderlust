const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    //Inserting object property(owner) in data.js
    initData.data = initData.data.map((obj) => ({
      ...obj, owner: '66ce53f8ec560f747b500e3f'
    }));
    await Listing.insertMany(initData.data);
}

initDB();