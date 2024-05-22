// import express from 'express';
// import bodyParser from 'body-parser';
// import routes from './routes/route.js';

// import Seller from './models/sellers.js'; // Adjust the path as needed

// import cors from 'cors';
// import dotenv from 'dotenv';
// import multer from "multer";
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import pkg from 'cloudinary';
// import connectDB from './config/dbConfig.js';
// import errorHandlers from './middleware/errorHandler';

// const cloudinary = pkg.v2;
// dotenv.config();
// connectDB();

// const PORT = process.env.PORT || 5000;


// const app = express();
// app.use(cors({ origin: '*' }));

// app.use(errorHandlers);
// // Body parser middleware
// app.use(bodyParser.json());



// // // Cloudinary configuration
// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // // Multer Storage Configuration
// // const storage = new CloudinaryStorage({
// //     cloudinary: cloudinary,
// //     params: {
// //         folder: 'uploads',
// //         allowed_formats: ['jpg', 'png'],
// //     },
// // });
// // const upload = multer({ storage: storage });    





// //app.post('/login', routes);

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import errorHandlers from './middleware/errorHandler';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to handle URL-encoded data
app.use(errorHandlers);

// Use the routes
app.use('/', routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));