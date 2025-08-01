# AWS Coffee Shop Backend Deployment Script
Write-Host "🚀 Deploying Coffee Shop Backend to AWS App Runner..." -ForegroundColor Green

# Check if AWS CLI is installed
try {
    aws --version | Out-Null
    Write-Host "✅ AWS CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ AWS CLI not installed. Please install it first:" -ForegroundColor Red
    Write-Host "   Download from: https://aws.amazon.com/cli/" -ForegroundColor Yellow
    exit 1
}

# Check if user is logged in to AWS
try {
    aws sts get-caller-identity | Out-Null
    Write-Host "✅ AWS CLI configured" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in to AWS. Please run:" -ForegroundColor Red
    Write-Host "   aws configure" -ForegroundColor Yellow
    exit 1
}

# Get user input for environment variables
Write-Host "📝 Please provide the following environment variables:" -ForegroundColor Cyan
$MONGODB_URI = Read-Host "Enter your MongoDB Atlas connection string"
$JWT_SECRET = Read-Host "Enter your JWT Secret"
$GOOGLE_CLIENT_ID = Read-Host "Enter your Google Client ID"
$GOOGLE_CLIENT_SECRET = Read-Host "Enter your Google Client Secret" -AsSecureString
$GOOGLE_CLIENT_SECRET = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($GOOGLE_CLIENT_SECRET))

# Deploy CloudFormation stack
Write-Host "📦 Deploying backend infrastructure..." -ForegroundColor Blue
$deployResult = aws cloudformation deploy `
    --template-file aws-backend-infrastructure.yaml `
    --stack-name coffeeshop-backend `
    --parameter-overrides `
        MongoDBConnectionString="$MONGODB_URI" `
        JWTSecret="$JWT_SECRET" `
        GoogleClientId="$GOOGLE_CLIENT_ID" `
        GoogleClientSecret="$GOOGLE_CLIENT_SECRET" `
    --capabilities CAPABILITY_IAM 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend deployed successfully!" -ForegroundColor Green
    
    # Get the backend URL
    $BACKEND_URL = aws cloudformation describe-stacks `
        --stack-name coffeeshop-backend `
        --query 'Stacks[0].Outputs[?OutputKey==`BackendServiceURL`].OutputValue' `
        --output text
    
    Write-Host ""
    Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
    Write-Host "🔗 Backend URL: $BACKEND_URL" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📝 Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Update your frontend environment variables:" -ForegroundColor White
    Write-Host "   REACT_APP_API_URL=$BACKEND_URL/api" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Update CORS in backend/server.js to include your frontend URL" -ForegroundColor White
    Write-Host ""
    Write-Host "3. Test your backend:" -ForegroundColor White
    Write-Host "   $BACKEND_URL/api/health" -ForegroundColor Gray
    Write-Host ""
    Write-Host "💰 AWS Free Tier: App Runner includes 2000 build minutes/month" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed. Error:" -ForegroundColor Red
    Write-Host $deployResult -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Check AWS credentials: aws sts get-caller-identity" -ForegroundColor Gray
    Write-Host "2. Verify MongoDB connection string format" -ForegroundColor Gray
    Write-Host "3. Check CloudFormation events in AWS Console" -ForegroundColor Gray
}
