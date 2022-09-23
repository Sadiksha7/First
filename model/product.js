const mongoose = require('mongoose');

const schema = mongoose.Schema

const productSchema = new schema({
  name: {
    type: String,
    required: true,
   },
  number: {
  type: String,
  required: true,
   },
  description: {
    type: String,
   required: true,
  // },
  // category: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Category",
  //   },
  // ],
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  },
});

module.exports = mongoose.model('Product', productSchema)