#!/bin/bash
# Script to deploy the database fix to EC2

echo "🚀 Deploying database fix to EC2..."

# Copy the fix script to EC2
scp backend/fix-database.js ec2-user@65.2.81.197:/tmp/fix-database.js

# Copy the updated model to EC2
scp backend/models/user.js ec2-user@65.2.81.197:/tmp/user.js

# Execute the fix on EC2
ssh ec2-user@65.2.81.197 << 'EOF'
echo "🔧 Applying database fix on EC2..."

# Navigate to the project directory
cd /opt/coffee-shop/backend

# Backup current user model
cp models/user.js models/user.js.backup

# Apply the new user model
cp /tmp/user.js models/user.js

# Run the database fix
echo "🗄️ Running database fix..."
node /tmp/fix-database.js

# Restart the application
echo "🔄 Restarting Coffee Shop API..."
pm2 restart coffee-shop-api

# Check status
echo "📊 Checking application status..."
pm2 status

# Wait a moment and test
sleep 5
echo "🏥 Testing health endpoint..."
curl -f http://localhost:3000/api/health && echo "✅ API is healthy!"

echo "🎉 Database fix deployment completed!"
EOF
