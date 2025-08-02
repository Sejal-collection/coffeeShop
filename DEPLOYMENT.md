# Environment Configuration Documentation

## 📋 Required Environment Variables

### Backend (.env)
```env
# Server Configuration
NODE_ENV=production
PORT=5001

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/coffeeshop?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Optional: Redis for sessions
REDIS_URL=redis://localhost:6379

# Optional: Email service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Frontend (.env)
```env
# API Configuration
REACT_APP_API_URL=https://your-backend-domain.com

# Google OAuth (Public key - same client ID)
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

# Optional: Analytics
REACT_APP_GA_TRACKING_ID=GA-XXXXXXXXX
```

## 🚀 Deployment Platforms

### 1. Backend Deployment Options

#### Railway (Recommended - Free Tier)
1. Fork this repository
2. Sign up at https://railway.app
3. Connect your GitHub account
4. Create new project from GitHub repo
5. Select backend folder
6. Add environment variables in Railway dashboard
7. Deploy automatically on push

#### Render (Alternative - Free Tier)
1. Fork this repository  
2. Sign up at https://render.com
3. Create new Web Service from GitHub
4. Root directory: `backend`
5. Build command: `npm install`
6. Start command: `npm start`
7. Add environment variables
8. Deploy

#### Heroku (Paid)
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `heroku config:set NODE_ENV=production`
4. Add other environment variables
5. `git subtree push --prefix backend heroku main`

### 2. Frontend Deployment (Already done)
Your frontend is deployed at: https://coffee-shop-teal.vercel.app/

To update environment variables:
1. Go to Vercel dashboard
2. Select your project
3. Settings → Environment Variables
4. Update `REACT_APP_API_URL` to point to your backend

## 🔒 Security Best Practices

### For Contributors
1. Never commit `.env` files
2. Use `.env.example` templates
3. Generate strong JWT secrets
4. Use environment-specific configurations

### For Production
1. Use managed database services (MongoDB Atlas)
2. Enable CORS only for your domain
3. Use HTTPS everywhere
4. Regular security updates
5. Monitor logs and errors

## 🤝 Contributor Setup

### 1. Local Development
```bash
# Clone the repository
git clone https://github.com/Mujtabaa07/coffeeShop.git
cd coffeeShop

# Install dependencies
npm install
cd backend && npm install && cd ..

# Copy environment templates
cp .env.example .env
cp backend/.env.example backend/.env

# Fill in your environment variables
# Start with Docker (recommended)
docker-compose up -d

# Or start manually
cd backend && npm run dev &
cd .. && npm start
```

### 2. Environment Templates
Create `.env.example` files so contributors know what variables they need without exposing real values.

## 📊 Monitoring & Logs

### Railway
- Built-in logs and metrics
- Custom domains
- Automatic SSL
- GitHub integration

### Render  
- Real-time logs
- Health checks
- Auto-deploy on push
- Free SSL certificates

## 🔄 CI/CD Pipeline Features

### Automated Testing
- Run tests on every PR
- Code quality checks
- Security scanning
- Build verification

### Deployment
- Auto-deploy from main branch
- Environment-specific builds
- Rollback capabilities
- Health checks

### Notifications
- Slack/Discord integration
- Email alerts
- GitHub status checks
- Performance monitoring
