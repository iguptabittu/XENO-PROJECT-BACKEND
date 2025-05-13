// routes/customer.js
import express from 'express';
import { createCustomer } from '../controllers/customerController.js'; // Import controller

const router = express.Router();

// POST route to create a customer
router.post('/', createCustomer);

export default router;

