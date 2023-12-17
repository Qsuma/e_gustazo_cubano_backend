import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: false
  },
  photo: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: false,
  },
  in_stock: {
    type: Number,
    require: true,
  },
  commission: {
    type: Number,
    require: true,
  },
  discount: {
    type: Object,
    require: false,
  }

});

export const ProductModel = mongoose.model('products', ProductSchema)