const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;
const InstitutionSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true
  },
  institute_charge: {
    type: Number,
    required: true,
    minlength: 4,
    maxlength: 80
  },
  our_charge: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  country: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  transcript_fee: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  }
});
InstitutionSchema.plugin(mongoosePaginate);

const InstitutionModel = mongoose.model("Institution", InstitutionSchema);
module.exports = InstitutionModel;
