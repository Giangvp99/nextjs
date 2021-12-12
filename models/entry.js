import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let entrySchema = new Schema({
    time: Array,
    supplier: String,
    mail: String,
    phone: String,
    address: String,
    products: Array 
});

mongoose.models = {};

let Entry = mongoose.model('Entry', entrySchema, 'entries')

export default Entry;
