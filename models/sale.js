import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let saleSchema = new Schema({
    time: String,
    title: String,
    name: String,
    phone: String,
    age: Number,
    gender: String,
    mail: String,
    products: Object
});

mongoose.models = {};

let Sale = mongoose.model('Sale', saleSchema, 'sales')

export default Sale;
