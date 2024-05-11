import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/sellers.js'; // Adjust the path as needed
import Seller from './models/User.js'; // Adjust the path as needed
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
app.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during registration ', error);
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

        const newSeller = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newSeller.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during registration ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        const seller = await Seller.findOne({ email });

        if (!user && !seller) {
            return res.status(404).json({ error: 'User not found' });
        }
        else if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Incorrect password' });
            }

            res.status(200).json({ message: 'Login successful' });
        }
        else if (seller) {
            const passwordMatch = await bcrypt.compare(password, seller.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Incorrect password' });
            }

            res.status(200).json({ message: 'Login successful' });
        }

        
        
    } catch (error) {
        console.error('Error during sign-in ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
