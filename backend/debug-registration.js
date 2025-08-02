// Debug script to test registration locally
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// User model (simplified)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  provider: { type: String, default: 'email' },
  loyaltyPoints: { type: Number, default: 100 }
});

const User = mongoose.model('User', userSchema);

async function testRegistration() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    
    // Use the same MongoDB URI from your production environment
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee-shop-test';
    await mongoose.connect(mongoUri);
    
    console.log('✅ Connected to MongoDB');
    
    // Test user data
    const testUser = {
      name: 'Test User Debug',
      email: 'debug-test@example.com',
      password: 'password123'
    };
    
    console.log('🔍 Testing user registration with:', { 
      name: testUser.name, 
      email: testUser.email 
    });
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: testUser.email });
    if (existingUser) {
      console.log('🗑️ Removing existing test user...');
      await User.deleteOne({ email: testUser.email });
    }
    
    // Hash password
    console.log('🔐 Hashing password...');
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(testUser.password, saltRounds);
    console.log('✅ Password hashed');
    
    // Create user
    console.log('👤 Creating user...');
    const user = await User.create({
      name: testUser.name,
      email: testUser.email,
      password: hashedPassword,
      provider: 'email',
      loyaltyPoints: 100
    });
    
    console.log('✅ User created successfully:', {
      id: user._id,
      name: user.name,
      email: user.email,
      loyaltyPoints: user.loyaltyPoints
    });
    
  } catch (error) {
    console.error('❌ Registration test failed:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: error.stack
    });
  } finally {
    await mongoose.disconnect();
    console.log('📝 Disconnected from MongoDB');
  }
}

testRegistration();
