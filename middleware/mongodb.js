import mongoose from 'mongoose';

export default async function connectDB() {
    if (mongoose.connections[0].readyState) {
        console.log("connect failed")
    }
    await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
};

