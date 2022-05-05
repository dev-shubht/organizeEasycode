const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  password: String,
  address: String,
  age: Number,
});

const model = mongoose.model("users", schema);

module.exports = model;