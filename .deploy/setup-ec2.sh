#!/bin/bash

# Setup script for EC2 instance
# Run this once on your EC2 server to set up auto-deployment

echo "🛠️ Setting up auto-deployment on EC2 instance..."

# Install required tools
echo "📦 Installing required packages..."
sudo apt update
sudo apt install -y git curl

# Install Node.js if not installed
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi

# Clone the repository if it doesn't exist
if [ ! -d "/home/ubuntu/coffeeShop" ]; then
    echo "📥 Cloning repository..."
    cd /home/ubuntu
    git clone https://github.com/Mujtabaa07/coffeeShop.git
fi

# Setup backend
echo "⚙️ Setting up backend..."
cd /home/ubuntu/coffeeShop/backend

# Install dependencies
npm install

# Setup environment file
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "⚠️ Please edit /home/ubuntu/coffeeShop/backend/.env with your actual configuration"
fi

# Setup auto-deployment cron job
echo "⏰ Setting up auto-deployment cron job..."
# Run every 5 minutes
(crontab -l 2>/dev/null; echo "*/5 * * * * /bin/bash /home/ubuntu/coffeeShop/.deploy/auto-deploy.sh") | crontab -

# Copy the auto-deploy script to the server
cp /home/ubuntu/coffeeShop/.deploy/auto-deploy.sh /home/ubuntu/auto-deploy.sh
chmod +x /home/ubuntu/auto-deploy.sh

# Setup PM2 to start on boot
pm2 startup
echo "Run the command shown above to enable PM2 on system startup"

# Start the application
pm2 start ecosystem.config.js
pm2 save

echo "✅ Setup completed!"
echo "📋 Next steps:"
echo "1. Edit /home/ubuntu/coffeeShop/backend/.env with your configuration"
echo "2. Run: pm2 restart all"
echo "3. Auto-deployment will check for updates every 5 minutes"
