const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true // Allow null values but still maintain uniqueness
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: function() {
      return this.provider === 'email'; // Only required for email registration
    }
  },
  avatar: {
    type: String
  },
  provider: {
    type: String,
    enum: ['google', 'email'],
    default: 'email'
  },
  loyaltyPoints: {
    type: Number,
    default: 100
  },
  favoriteOrders: [{
    name: String,
    price: Number,
    customizations: [String],
    orderDate: { type: Date, default: Date.now }
  }],
  preferences: {
    newsletter: { type: Boolean, default: false },
    notifications: { type: Boolean, default: true },
    favoriteStore: String
  },
  orderHistory: [{
    orderId: String,
    items: [Object],
    total: Number,
    orderDate: { type: Date, default: Date.now },
    status: { type: String, default: 'completed' }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);