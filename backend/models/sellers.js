import mongoose from 'mongoose';

const { Schema } = mongoose;

const sellerSchema = new Schema({
    fname: String,
    mname: String,
    lname: String,
    uname: String,
    email: String,
    phoneNumber: String,
    dob: Date,
    gender: String,
    password: String,
    confirmPassword: String,
    country: String,
    timezone: String,
    description: String,
    skills: [String],
    profilePicture: String
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;