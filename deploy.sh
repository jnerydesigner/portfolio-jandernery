#!/bin/sh
echo "Deploy Initialised"

git pull origin main

npm ci

npm run build

pm2 restart portfolio-jandernery 