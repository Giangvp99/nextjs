import mongoose from 'mongoose';
import connectDB from "../middleware/mongodb.js"

connectDB()

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    passowrd: String,
    fullname: String,
    age: Number,
    phone: String,
    email: String,
    address: String,
    isAdmin: Boolean
});

mongoose.models = {};

let User = mongoose.model('User', userSchema, 'users')

export default User;


