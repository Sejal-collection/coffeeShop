# 🚀 GitHub-Based Deployment Guide

## Quick Setup & Deployment

### Step 1: Push to GitHub

```bash
# From your local project directory
git add .
git commit -m "Update CORS configuration for production"
git push origin main
```

### Step 2: Deploy to EC2 via GitHub

```bash
# Connect to your EC2 instance
ssh -i "C:\Users\moham\Downloads\coffeeshop-backend-key.pem" ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com

# Backup existing installation
cd /home/ubuntu
sudo mv coffeeShop coffeeShop_backup_$(date +%Y%m%d_%H%M%S) 2>/dev/null || true

# Clone fresh from GitHub
git clone https://github.com/Mujtabaa07/coffeeShop.git
cd coffeeShop/backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
nano .env
```

### Step 3: Configure Environment Variables

Add these to `/home/ubuntu/coffeeShop/backend/.env`:

```env
# Database
MONGODB_URI=your_mongodb_atlas_connection_string

# Authentication
JWT_SECRET=your_long_random_jwt_secret_key
SESSION_SECRET=your_session_secret_key

# Google OAuth
GOOGLE_CLIENT_ID=715685911320-ar5soc2f1ggkqv2ivesl4ob7vaodh6ld.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server
PORT=3000
NODE_ENV=production

# CORS Origins (Optional)
CLIENT_URL=https://coffee-shop-teal.vercel.app
ALLOWED_ORIGINS=https://coffee-shop-teal.vercel.app,https://your-custom-domain.com
```

### Step 4: Start with PM2

```bash
# Stop any existing processes
pm2 delete all

# Start the application
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save
pm2 startup

# Check status
pm2 status
pm2 log
```

## 🔄 Future Updates

When you make changes to your code:

```bash
# On your local machine
git add .
git commit -m "Your update message"
git push origin main

# On your EC2 instance
cd /home/ubuntu/coffeeShop
git pull origin main
npm install  # Only if package.json changed
pm2 restart all
```

## 🔧 Environment-Based CORS

The server now automatically handles CORS based on environment:

- **Development**: Allows localhost and common dev platforms
- **Production**: Uses environment variables for specific origins
- **Open Source**: Flexible configuration for easy deployment

## ✅ Supported Origins

Current CORS configuration allows:
- `http://localhost:3000` (local development)
- `https://coffee-shop-teal.vercel.app` (your Vercel deployment)
- Any domain with `vercel.app`, `netlify.app`, `herokuapp.com`
- Custom domains via `ALLOWED_ORIGINS` environment variable

## 🚨 Troubleshooting

### CORS Issues
```bash
# Check server logs
pm2 log coffeeshop-backend

# Test API endpoint
curl -H "Origin: https://coffee-shop-teal.vercel.app" http://localhost:3000/api/health
```

### Database Connection Issues
```bash
# Test MongoDB connection
node -e "const mongoose = require('mongoose'); require('dotenv').config(); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('✅ Connected')).catch(err => console.log('❌ Error:', err.message));"
```

### PM2 Issues
```bash
pm2 status          # Check process status
pm2 restart all     # Restart all processes
pm2 reload all      # Reload without downtime
pm2 delete all      # Stop and delete all processes
```

## 📱 Quick Commands

```bash
# Server management
pm2 restart all && pm2 log    # Restart and view logs
pm2 monit                     # Real-time monitoring

# Git updates
git pull && npm install && pm2 restart all

# Health check
curl http://localhost:3000/api/health
```
