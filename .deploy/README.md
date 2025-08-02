# 🚀 Auto-Deployment Setup for EC2

## Quick Setup

### 1. One-time EC2 Setup
```bash
# SSH into your EC2 instance
ssh -i "/path/to/your-key.pem" ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com

# Download and run setup script
curl -o setup.sh https://raw.githubusercontent.com/Mujtabaa07/coffeeShop/main/.deploy/setup-ec2.sh
chmod +x setup.sh
./setup.sh
```

### 2. Configure Environment
```bash
# Edit backend configuration
nano /home/ubuntu/coffeeShop/backend/.env

# Add your actual values:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3. Start Services
```bash
cd /home/ubuntu/coffeeShop/backend
pm2 restart all
pm2 save
```

## ✅ Auto-Deployment Features

- **Auto-Pull**: Checks GitHub every 5 minutes for updates
- **Auto-Restart**: Restarts server when changes detected
- **Auto-Install**: Updates dependencies when package.json changes
- **Logs**: All deployment activities logged to `/home/ubuntu/deploy.log`

## 📊 Monitoring

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs

# View deployment logs
tail -f /home/ubuntu/deploy.log

# Manual deployment trigger
/home/ubuntu/auto-deploy.sh
```

## 🔧 Manual Override

If you need to manually deploy:
```bash
cd /home/ubuntu/coffeeShop
git pull origin main
cd backend
npm install
pm2 restart all
```

---

**Note**: After setup, just push to GitHub main branch and your EC2 instance will automatically update within 5 minutes!
