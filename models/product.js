import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let productSchema = new Schema({
    name:String,
    img: String,
    description: String,
    price: String,
    quatity: Number,
    color: String,
    material: String,
    country: String
});

mongoose.models = {};

let Product = mongoose.model('Product', productSchema, 'products')

export default Product;


