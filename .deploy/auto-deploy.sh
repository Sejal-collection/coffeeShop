#!/bin/bash

# Auto-deployment script for EC2 instance
# This script should be placed on the EC2 server

PROJECT_DIR="/home/ubuntu/coffeeShop"
REPO_URL="https://github.com/Mujtabaa07/coffeeShop.git"
BRANCH="main"
LOG_FILE="/home/ubuntu/deploy.log"

echo "🚀 Starting auto-deployment at $(date)" | tee -a $LOG_FILE

cd $PROJECT_DIR || {
    echo "❌ Project directory not found. Cloning repository..." | tee -a $LOG_FILE
    cd /home/ubuntu
    git clone $REPO_URL
    cd $PROJECT_DIR
}

# Fetch latest changes
echo "📡 Fetching latest changes from GitHub..." | tee -a $LOG_FILE
git fetch origin $BRANCH

# Check if there are new commits
LOCAL_COMMIT=$(git rev-parse HEAD)
REMOTE_COMMIT=$(git rev-parse origin/$BRANCH)

if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
    echo "🔄 New changes detected. Updating..." | tee -a $LOG_FILE
    
    # Pull latest changes
    git reset --hard origin/$BRANCH
    
    # Update backend dependencies if package.json changed
    if git diff --name-only $LOCAL_COMMIT $REMOTE_COMMIT | grep -q "backend/package.json"; then
        echo "📦 Installing backend dependencies..." | tee -a $LOG_FILE
        cd $PROJECT_DIR/backend
        npm install
    fi
    
    # Copy environment variables if not exist
    if [ ! -f "$PROJECT_DIR/backend/.env" ]; then
        echo "⚙️ Setting up backend environment..." | tee -a $LOG_FILE
        cd $PROJECT_DIR/backend
        cp .env.example .env
        echo "⚠️ Please configure your .env file with actual values" | tee -a $LOG_FILE
    fi
    
    # Restart PM2 processes
    echo "🔄 Restarting backend services..." | tee -a $LOG_FILE
    cd $PROJECT_DIR/backend
    
    # Stop existing processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the application
    pm2 start ecosystem.config.js
    pm2 save
    
    echo "✅ Deployment completed successfully at $(date)" | tee -a $LOG_FILE
    echo "📊 PM2 Status:" | tee -a $LOG_FILE
    pm2 status | tee -a $LOG_FILE
    
else
    echo "ℹ️ No new changes detected." | tee -a $LOG_FILE
fi

echo "📋 Current status:" | tee -a $LOG_FILE
pm2 status | tee -a $LOG_FILE
