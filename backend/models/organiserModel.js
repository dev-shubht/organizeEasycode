const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String, 
  description:String, 
  category:String, 
  city:String, 
  reviews:Array,
  eventData:Array,
  createdAt:{type: Date, default: new Date()}

})
const model = mongoose.model("users", schema);

module.exports = model;