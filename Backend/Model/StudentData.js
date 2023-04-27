const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },

  coursename: {
    type: String,
  },
  price: {
    type: Number,
  },
  
  paidamt: {
    type: Number,
  },
  bal: {
    type: Number,
  },
});
module.exports = mongoose.model("Student", schema);
