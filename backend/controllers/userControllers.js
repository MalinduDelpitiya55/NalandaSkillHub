// userController.js
import asyncHandler from 'express-async-handler';
import JWT from 'jsonwebtoken';
import Buyer from './../models/buyer.js'; // Adjust the path as needed
import Seller from './../models/sellers.js'; // Adjust the path as needed
import bcrypt from 'bcryptjs';

const registerUser = asyncHandler(async (req, res) => {
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
// controllers/userControllers.js

 const registerSeller = async (req, res) => {
    try {
        const {
            fname, lname, uname, email, phoneNumber, dob, gender, password, country, timezone, description, skills,
        } = req.body;

        // Log incoming data for debugging
        console.log('Received form data:', req.body);

        // Create a new seller
        const newSeller = new Seller({
            fname,
            lname,
            uname,
            email,
            phoneNumber,
            dob,
            gender,
            password,
            country,
            timezone,
            description,
            skills,
        });

        // Save the new seller to the database
        await newSeller.save();

        res.status(201).json({ message: 'Seller registered successfully' });
    } catch (error) {
        console.error('Error registering seller:', error);
        res.status(400).json({ error: error.message });
    }
};


const userLogin = asyncHandler(async (req, res, next) => {
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

        const foundUser = user || seller;

        if (await bcrypt.compare(password, foundUser.password)) {
            const accessToken = JWT.sign({
                user: {
                    firstname: foundUser.name,
                    email: foundUser.email,
                    id: foundUser.id,
                    role: foundUser.role,
                }
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100s' });

            return res.status(200).json({
                status: 'success',
                message: 'Logged in successfully',
                accessToken,
                user: {
                    firstname: foundUser.name,
                    email: foundUser.email,
                    _id: foundUser.id,
                    role: foundUser.role,
                }
            });
        } else {
            return res.status(401).json({ error: "Email or password is not valid" });
        }
    } catch (error) {
        next(error);
    }
});

const home = async (req, res) => {
    console.log('User accessed protected resource:', req.user); // User data from decoded token
    res.json({ message: 'Welcome, authorized user!' });
};

export { registerUser, userLogin, home, registerSeller };
