import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
// import orderRouter from './routers/orderRouter.js';
import productRouter from './routes/ProductRouter.js';


dotenv.config()

const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB-URL || 'mongodb://localhost/e-commerce', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Connection to mongoose is successeful');
}).catch((e) => {
    console.log('connection to mongoose fail');
})



// app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
// app.use('/api/orders', orderRouter);




app.get('/', (req,res)=>{
    res.send("server is ready");
});

const port = process.env.PORT||5000;
app.listen(port, ()=>{
console.log(`server at http://localhost:${port}`)
});
