# 🚀 AWS Backend Deployment Guide - Coffee Shop

## Overview
Deploy your Coffee Shop backend to **AWS App Runner** - a fully managed service that automatically builds and deploys your application from source code.

### 🎯 **AWS App Runner Benefits:**
- **Automatic scaling** based on traffic
- **Pay-per-use** pricing (very affordable)
- **Automatic deployments** from GitHub
- **Built-in load balancing** and HTTPS
- **Health checks** and monitoring

## 💰 **Cost Estimate (AWS Free Tier)**
- **2,000 build minutes per month** (FREE)
- **Compute time**: ~$0.007/hour for 0.25 vCPU, 0.5 GB RAM
- **Estimated monthly cost**: $2-5 for small applications

## 🚀 **Deployment Options**

### Option 1: One-Click PowerShell Deployment
```powershell
npm run deploy:aws-backend
```

### Option 2: Manual AWS CLI Deployment
```bash
aws cloudformation deploy \
  --template-file aws-backend-infrastructure.yaml \
  --stack-name coffeeshop-backend \
  --parameter-overrides \
    MongoDBConnectionString="your-mongodb-uri" \
    JWTSecret="your-jwt-secret" \
    GoogleClientId="your-google-client-id" \
    GoogleClientSecret="your-google-client-secret" \
  --capabilities CAPABILITY_IAM
```

### Option 3: GitHub Actions (Automatic)
Push to main branch triggers automatic deployment via `.github/workflows/aws-backend-deploy.yml`

## 📋 **Prerequisites**

### 1. AWS Account Setup
- [ ] Create free AWS account at [aws.amazon.com](https://aws.amazon.com)
- [ ] Install AWS CLI: `aws configure`
- [ ] Set up AWS credentials

### 2. Environment Variables
- [ ] **MongoDB Atlas**: Connection string
- [ ] **JWT Secret**: Random secure string
- [ ] **Google OAuth**: Client ID and Secret

### 3. GitHub Secrets (for GitHub Actions)
Add these in GitHub repository → Settings → Secrets:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS Access Key |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Key |
| `AWS_REGION` | AWS Region (e.g., us-east-1) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT secret key |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |

## 🔧 **Configuration Files**

### `backend/apprunner.yaml`
AWS App Runner build and runtime configuration:
- Node.js 18 runtime
- Port 8080 binding
- Production environment

### `aws-backend-infrastructure.yaml`
CloudFormation template for:
- App Runner service
- IAM roles and permissions
- Health check configuration
- Environment variables

## 📡 **After Deployment**

### 1. Get Your Backend URL
Your backend will be available at:
```
https://xxxxxxxxxx.awsapprunner.com
```

### 2. Update Frontend Environment Variables
Update your frontend deployment with:
```env
REACT_APP_API_URL=https://your-app-runner-url.awsapprunner.com/api
```

### 3. Update CORS Settings
Add your frontend URL to `backend/server.js`:
```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-frontend-domain.com',  // Add your frontend URL
  process.env.CLIENT_URL
].filter(Boolean);
```

### 4. Test Your Backend
- **Health Check**: `https://your-app-runner-url.awsapprunner.com/api/health`
- **API Status**: `https://your-app-runner-url.awsapprunner.com/api`

## 🔍 **Monitoring & Debugging**

### AWS Console
- **App Runner**: Monitor deployments and logs
- **CloudWatch**: View application logs and metrics
- **CloudFormation**: Check stack status and events

### Useful AWS CLI Commands
```bash
# Check deployment status
aws cloudformation describe-stacks --stack-name coffeeshop-backend

# View App Runner service
aws apprunner describe-service --service-arn <service-arn>

# Get service logs
aws logs tail /aws/apprunner/coffeeshop-backend --follow
```

## 🆘 **Troubleshooting**

### Common Issues:

1. **Build Failures**
   - Check `backend/package.json` for correct dependencies
   - Verify Node.js version compatibility
   - Check CloudWatch logs

2. **Environment Variables**
   - Ensure all required variables are set in CloudFormation
   - Check MongoDB connection string format
   - Verify Google OAuth credentials

3. **CORS Errors**
   - Update `allowedOrigins` in `server.js`
   - Add your frontend domain to CORS settings

4. **Health Check Failures**
   - Ensure `/api/health` endpoint exists
   - Check if app binds to correct port (8080)
   - Verify app starts successfully

### Debug Commands:
```bash
# Test locally
cd backend
npm install
npm start

# Test health endpoint
curl http://localhost:8080/api/health

# Check AWS CloudFormation events
aws cloudformation describe-stack-events --stack-name coffeeshop-backend
```

## 🔄 **Continuous Deployment**

Every push to `main` branch automatically:
1. **Triggers** GitHub Actions workflow
2. **Deploys** to AWS App Runner
3. **Updates** your live backend
4. **Comments** deployment URL on PRs

## 🎉 **Success Checklist**

- [ ] Backend deployed to AWS App Runner
- [ ] Environment variables configured
- [ ] Frontend updated with backend URL
- [ ] CORS settings updated
- [ ] Health check endpoint working
- [ ] GitHub Actions workflow running
- [ ] Google OAuth working with production URLs

## 🔗 **Useful Links**

- [AWS App Runner Documentation](https://docs.aws.amazon.com/apprunner/)
- [AWS Free Tier Details](https://aws.amazon.com/free/)
- [App Runner Pricing](https://aws.amazon.com/apprunner/pricing/)
- [AWS CLI Installation](https://aws.amazon.com/cli/)

Your Coffee Shop backend is now running on AWS with automatic scaling and deployments! 🎊
