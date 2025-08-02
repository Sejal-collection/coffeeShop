const mongoose = require('mongoose');
require('dotenv').config();

async function fixGoogleIdIndex() {
  try {
    console.log('🔧 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    
    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');
    
    console.log('📊 Current users with null googleId:');
    const nullGoogleIdUsers = await usersCollection.find({ googleId: null }).toArray();
    console.log(`Found ${nullGoogleIdUsers.length} users with null googleId`);
    
    if (nullGoogleIdUsers.length > 0) {
      console.log('🧹 Removing googleId field from email users...');
      
      // Remove googleId field from email users (set to undefined)
      const result = await usersCollection.updateMany(
        { googleId: null },
        { $unset: { googleId: "" } }
      );
      
      console.log(`✅ Updated ${result.modifiedCount} users`);
    }
    
    console.log('📋 Checking indexes...');
    const indexes = await usersCollection.indexes();
    console.log('Current indexes:', indexes.map(idx => ({ name: idx.name, key: idx.key })));
    
    // Drop and recreate the googleId index to ensure it's sparse
    try {
      console.log('🗑️ Dropping existing googleId index...');
      await usersCollection.dropIndex('googleId_1');
      console.log('✅ Index dropped');
    } catch (error) {
      console.log('ℹ️ Index may not exist:', error.message);
    }
    
    console.log('🔨 Creating new sparse index for googleId...');
    await usersCollection.createIndex(
      { googleId: 1 }, 
      { 
        unique: true, 
        sparse: true,
        name: 'googleId_1' 
      }
    );
    
    console.log('✅ Database fix completed successfully!');
    console.log('🎉 Email registration should now work properly');
    
  } catch (error) {
    console.error('❌ Error fixing database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📤 Disconnected from MongoDB');
  }
}

fixGoogleIdIndex();
