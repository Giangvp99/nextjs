import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let countrySchema = new Schema({
    country: String
});

mongoose.models = {};

let Country = mongoose.model('Country', countrySchema,'countries')

export default Country;
