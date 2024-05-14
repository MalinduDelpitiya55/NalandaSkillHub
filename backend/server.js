import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Seller from './models/sellers.js'; // Adjust the path as needed
import Buyer from './models/buyer.js'; // Adjust the path as needed
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds timeout
})
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err));

// Registration endpoint
app.post('/buyerRegistration', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newBuyer = new Buyer({
            name,
            email,
            password: hashedPassword,
            role: "buyer"
        });

        await newBuyer.save();

        res.status(201).json({ message: 'Buyer account created successfully' });
    } catch (error) {
        console.error('Error during buyer registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/sellerRegistration', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newSeller = new Seller({
            name,
            email,
            password: hashedPassword,
            role: "seller"
        });

        await newSeller.save();

        res.status(201).json({ message: 'Seller account created successfully' });
    } catch (error) {
        console.error('Error during seller registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find the user or seller by email
        const user = await Buyer.findOne({ email });
        const seller = await Seller.findOne({ email });

        if (!user && !seller) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userType = user ? 'user' : 'seller';
        const foundUser = user || seller;

        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        res.status(200).json({ message: `${userType} login successful` });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
