// app.ts
import express from 'express';
import orderRoutes from './routes/orderroutes';
import mongoose from 'mongoose';
import { createOrder } from './controllers/ordercontroller'; 

const app = express();

app.use(express.json());
app.use('/api/orders', orderRoutes);
// Sipariş oluşturma


// MongoDB bağlantısı
const port = 3000;
const db = "mongodb://localhost:27017/cargo";

mongoose.connect(db)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
  export default app ;
  