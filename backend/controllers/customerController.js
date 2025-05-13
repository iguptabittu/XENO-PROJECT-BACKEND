import Customer from '../models/models.customer.js';

export const createCustomer = async (req, res) => {
  const { customer_id, name, email, phone } = req.body;

  // Validation
  if (!customer_id || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create customer in database
    const newCustomer = new Customer({ customer_id, name, email, phone });

    // Save the customer
    await newCustomer.save();

    // Respond with success message
    res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Error creating customer' });
  }
};
