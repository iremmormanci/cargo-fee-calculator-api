# Cargo Fee Calculator API

This is a simple Node.js and TypeScript-based cargo order application.
It calculates cargo fees based on package weight, shipping distance, and delivery type (standard or express).
The system stores orders in MongoDB and provides an API to create new cargo orders.

🚀 Features
Calculates cargo fee considering weight, distance, and delivery type.

Supports standard and express delivery options with different fee multipliers.

Stores all orders in MongoDB database.

Provides an Express API endpoint to create new cargo orders.

🛠 Technologies
TypeScript

Node.js

Express

MongoDB (via Mongoose)

AVA for unit testing

📂 Project Structure
src/
├── controllers/
│   └── ordercontroller.ts     # Cargo fee calculations & order creation logic
├── models/
│   └── ordermodel.ts          # Mongoose schema & model for Cargo orders
├── routes/
│   └── orderroutes.ts         # Express routes for cargo orders
├── app.ts                     # Express app setup & MongoDB connection
└── tests/
    └── ordercontroller.test.ts # Unit tests for fee calculation functions

🚚 Usage & Flow
Client sends a POST request to /api/orders/create/order with order details (weight, distance, cargoType).

The backend validates input and calculates total cargo fee.

Creates a new cargo order document in MongoDB.

Returns the newly created cargo order with fee details.

