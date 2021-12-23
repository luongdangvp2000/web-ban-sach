import express from "express";
//import data from "./data.js";
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/web-ban-sach').then(() => {
    console.log('mongodb is connectinggg')
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`);
});