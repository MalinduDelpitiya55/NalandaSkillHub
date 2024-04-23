import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js'; // Adjust the path as needed
import cors from 'cors';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect('mongodb+srv://malindu:abc1234@malindu.skflmg0.mongodb.net/first?retryWrites=true&w=majority&appName=malindu')
    .then(() => console.log('Mongodb is connected'))
    .catch(err => console.log(err));

// Registration endpoint
// Registration endpoint
app.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log('Received data:', name, email, password); // Log the received data

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




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
