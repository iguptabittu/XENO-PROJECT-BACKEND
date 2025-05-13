// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: [true, 'Order ID is required'],
    unique: true,
  },
  customer_id: {
    type: String, // Use String instead of ObjectId for custom IDs
    required: [true, 'Customer ID is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  items: [{
    item_id: { type: String, required: true },
    quantity: { type: Number, required: true }
  }],
  created_at: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
