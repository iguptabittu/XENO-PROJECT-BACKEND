// routes/order.js
import express from 'express';
import { createOrder } from '../controllers/orderController.js';  // Import the controller

const router = express.Router();

// POST route to create an order
router.post('/', createOrder);

export default router;
