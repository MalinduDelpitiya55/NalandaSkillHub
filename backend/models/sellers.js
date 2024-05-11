import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const sellers = mongoose.model('sellers', userSchema);

export default sellers;
