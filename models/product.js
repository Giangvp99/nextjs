import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let productSchema = new Schema({
    image: String,
    title:String,
    price: Number,
    amount: Number,
    color: String,
    material: Object,
    country: String,
    model:String,
    type:String,
    name:String
});

mongoose.models = {};

let Product = mongoose.model('Product', productSchema, 'products')

export default Product;


