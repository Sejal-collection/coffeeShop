#!/bin/bash 
echo "Deploying with Git Bash..." 
ssh -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com "echo 'Testing connection...'" 
scp -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" backend/fix-googleid-index.js ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com:/home/ubuntu/coffeeShop/backend/ 
scp -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" backend/routes/auth.js ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com:/home/ubuntu/coffeeShop/backend/routes/ 
scp -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" backend/verify-database-fix.js ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com:/home/ubuntu/coffeeShop/backend/ 
scp -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" backend/test-oauth-config.js ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com:/home/ubuntu/coffeeShop/backend/ 
ssh -i "/c/Users/moham/Downloads/coffeeshop-backend-key.pem" ubuntu@ec2-65-2-81-197.ap-south-1.compute.amazonaws.com "cd /home/ubuntu/coffeeShop/backend && node fix-googleid-index.js && npm install --only=production && pm2 restart all && pm2 status" 
