// routes/route.js
import express from 'express';
import { registerUser, userLogin, home, registerSeller } from '../controllers/userControllers.js';
import validateToken from '../middleware/validation.js';

const router = express.Router();

router.post('/buyerRegistration', registerUser);
router.post('/sellerRegistration12', registerSeller);
router.post('/login', userLogin);
router.get('/', validateToken, home);  // Changed to GET for accessing the home route

export default router;
