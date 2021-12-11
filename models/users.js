import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
    fullname: String,
    age: Number,
    gender:Boolean,
    phone: String,
    email: String,
    address: String,
    isAdmin: Boolean
});

mongoose.models = {};

let User = mongoose.model('User', userSchema, 'users')

export default User;


