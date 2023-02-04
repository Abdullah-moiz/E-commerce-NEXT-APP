import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.DB_URL);
console.log('DB_URL: ', process.env.DB_URL)

export default connectMongo;
