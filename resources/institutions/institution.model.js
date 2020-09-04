const mongoose = require("mongoose");

const { Schema } = mongoose;
const InstitutionSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 80,
  },
  state: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  country: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
});

const InstitutionModel = mongoose.model("Institution", InstitutionSchema);
module.exports = InstitutionModel;