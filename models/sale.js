import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let saleSchema = new Schema({
    time: Array,
    buyer: String,
    phone: String,
    age: Number,
    gender: Boolean,
    mail: String,
    products: Object
});

mongoose.models = {};

let Sale = mongoose.model('Sale', saleSchema, 'sales')

export default Sale;
