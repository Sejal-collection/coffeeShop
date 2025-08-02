# Coffee Shop CI/CD Deployment Guide

## 🚀 Deployment Architecture

### Backend: AWS EC2 (Free Tier)
- **Instance**: t2.micro (Free tier eligible)
- **OS**: Amazon Linux 2
- **IP**: 65.2.81.197
- **Port**: 3000
- **Process Manager**: PM2
- **API Base URL**: http://65.2.81.197:3000/api

### Frontend: Vercel
- **Platform**: Vercel (Free tier)
- **Build Tool**: Create React App
- **Environment**: Production
- **Domain**: Auto-generated Vercel domain

## 🔧 CI/CD Pipelines

### 1. Main Deployment Pipeline (`frontend-deploy.yml`)
Triggers on push to `main` branch
```
1. Test Frontend → Test Backend → Deploy Backend to EC2 → Deploy Frontend to Vercel → Health Check
```

### 2. Backend-Only Pipeline (`backend-deploy.yml`)
Triggers on backend changes or manual dispatch
```
1. Test Backend → Deploy to EC2 → Verify Deployment → Notification
```

## 📋 Required GitHub Secrets

### AWS EC2 Secrets
```
EC2_SSH_PRIVATE_KEY: SSH private key for EC2 access
```

### MongoDB Secrets
```
MONGODB_URI: MongoDB Atlas connection string
```

### Authentication Secrets
```
JWT_SECRET: JWT signing secret
GOOGLE_CLIENT_ID: Google OAuth client ID
GOOGLE_CLIENT_SECRET: Google OAuth client secret
SESSION_SECRET: Express session secret
REACT_APP_GOOGLE_CLIENT_ID: Frontend Google client ID
```

### Vercel Secrets
```
VERCEL_TOKEN: Vercel deployment token
VERCEL_ORG_ID: Vercel organization ID  
VERCEL_PROJECT_ID: Vercel project ID
```

## 🛠️ Local Development Setup

### Environment Files
- `.env.development` → Local development (points to EC2)
- `.env` → Production configuration
- `backend/.env` → Backend environment (created during deployment)

### Commands

#### Frontend Development
```bash
npm install
npm start          # Starts development server
npm test           # Runs tests
npm run build      # Creates production build
```

#### Backend Development
```bash
cd backend
npm install
npm run dev        # Starts with nodemon
npm test           # Runs backend tests
npm run seed       # Seeds database with products
```

#### Backend Production (EC2)
```bash
npm run pm2:start    # Start with PM2
npm run pm2:stop     # Stop application
npm run pm2:restart  # Restart application
npm run pm2:logs     # View logs
npm run pm2:status   # Check status
```

## 🔍 Monitoring & Health Checks

### Health Endpoints
- **Backend Health**: http://65.2.81.197:3000/api/health
- **Products API**: http://65.2.81.197:3000/api/products

### PM2 Monitoring (On EC2)
```bash
pm2 status                  # Show all processes
pm2 logs coffee-shop-api    # View logs
pm2 monit                   # Real-time monitoring
pm2 restart coffee-shop-api # Restart application
```

### Log Files (On EC2)
```
/opt/coffee-shop/logs/out.log      # Application output
/opt/coffee-shop/logs/err.log      # Error logs  
/opt/coffee-shop/logs/combined.log # Combined logs
```

## 🚀 Manual Deployment

### Frontend (Local to Vercel)
```bash
npm run build
npx vercel --prod
```

### Backend (Manual EC2 Deployment)
```bash
# On EC2 instance
cd /opt/coffee-shop/backend
git pull origin main
npm ci --only=production
pm2 restart coffee-shop-api
```

## 🔐 Security Configuration

### EC2 Security Group
- **Port 22**: SSH access (your IP only)
- **Port 3000**: HTTP API access (0.0.0.0/0)
- **Port 80/443**: Optional for reverse proxy

### CORS Configuration
Frontend domains allowed:
- Vercel production domain
- Localhost for development

### Environment Variables
All sensitive data stored in:
- GitHub Secrets (CI/CD)
- EC2 environment file (runtime)

## 📊 Cost Analysis

### AWS Free Tier Usage
- **EC2 t2.micro**: 750 hours/month (FREE)
- **Data Transfer**: 15GB/month (FREE)
- **Estimated Monthly Cost**: $0.00

### Vercel Free Tier
- **Deployments**: Unlimited
- **Bandwidth**: 100GB/month
- **Function Executions**: 100GB-hrs
- **Estimated Monthly Cost**: $0.00

**Total Monthly Cost: $0.00** 🎉

## 🐛 Troubleshooting

### Common Issues

#### 1. Proxy Errors (localhost:5001)
**Problem**: Frontend trying to connect to wrong backend port
**Solution**: Check environment variables in `.env.development`

#### 2. EC2 Connection Refused
**Problem**: Backend not running or wrong port
**Solution**: 
```bash
ssh ec2-user@65.2.81.197
pm2 status
pm2 restart coffee-shop-api
```

#### 3. Build Failures
**Problem**: ESLint errors or missing dependencies
**Solution**: Fix lint errors and ensure all dependencies are installed

#### 4. 502 Bad Gateway
**Problem**: Backend crashed or not responding
**Solution**: Check PM2 logs and restart service

### Health Check Commands
```bash
# Test backend health
curl http://65.2.81.197:3000/api/health

# Test products API
curl http://65.2.81.197:3000/api/products

# Check PM2 process
ssh ec2-user@65.2.81.197 "pm2 status"
```

## 📈 Performance Optimization

### Backend Optimizations
- PM2 process management
- Production-only dependencies
- Error logging and monitoring
- Memory restart threshold (1GB)

### Frontend Optimizations  
- Code splitting with React
- Static asset optimization
- CDN delivery via Vercel

## 🔄 Rollback Procedures

### Backend Rollback
```bash
# On EC2
cd /opt/coffee-shop
# Restore from backup
sudo cp -r backend-backup-YYYYMMDD-HHMMSS backend
cd backend
pm2 restart coffee-shop-api
```

### Frontend Rollback
```bash
# Revert via Vercel dashboard or CLI
vercel --prod --force  # Deploy previous version
```

## 📞 Support & Maintenance

### Automated Monitoring
- GitHub Actions health checks
- PM2 auto-restart on failure
- Log rotation and cleanup

### Manual Checks
- Weekly health endpoint verification
- Monthly log review
- Quarterly dependency updates

---

**Last Updated**: August 2, 2025
**Backend Version**: 1.0.0
**Frontend Version**: 0.1.0
