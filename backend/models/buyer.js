import mongoose from 'mongoose';

const { Schema } = mongoose;

const buyerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "buyer" // Assuming default role is "buyer"
    }
});

const Buyer = mongoose.model('Buyer', buyerSchema);

export default Buyer;