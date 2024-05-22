import mongoose from 'mongoose';

const { Schema } = mongoose;

const buyerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        default: "buyer",
        enum: ["buyer", "seller"] // Ensure role is either buyer or seller
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Buyer = mongoose.model('Buyer', buyerSchema);

export default Buyer;
