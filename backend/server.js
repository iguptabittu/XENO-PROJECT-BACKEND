import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import customerRoute from "./routes/routes.customer.js";
import orderRoute from "./routes/routes.order.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/customers', customerRoute);
app.use('/api/orders', orderRoute);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
