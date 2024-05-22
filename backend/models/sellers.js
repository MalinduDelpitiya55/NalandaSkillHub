// models/sellerModel.js

import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    fname: { type: String  },
    lname: { type: String },
    uname: { type: String },
    email: { type: String },
    phoneNumber: { type: String},
    dob: { type: Date},
    gender: { type: String },
    password: { type: String },
    country: { type: String},
    timezone: { type: String },
    description: { type: String, required: false },
    skills: { type: [String], required: false },
    role: {
        type: String,
        default: "seller",
        enum: ["buyer", "seller"] // Ensure role is either buyer or seller
    }
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;
