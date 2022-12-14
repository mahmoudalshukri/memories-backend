import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', postsRoutes);
app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.send('App Is Running.');
});
const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb+srv://mahmoudhshukri:2873MhMA@cluster0.0puzrca.mongodb.net/memorysDB", { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

