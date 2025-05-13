// controllers/orderController.js
import Order from '../models/model.order.js';

export const createOrder = async (req, res) => {
  const { order_id, customer_id, amount, items } = req.body;

  // Validate all required fields
  if (!order_id || !customer_id || typeof amount !== 'number' || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  // Create payload for the order
  const payload = {
    order_id,
    customer_id,
    amount,
    items,
    created_at: new Date().toISOString(),
  };

  try {
    // Save the order to the database
    await Order.create(payload);
    res.status(202).json({ message: 'Order created' });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
};
