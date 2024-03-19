#!/bin/sh
echo "Deploy Initialised"

npm ci

npm run build

pm2 restart portfolio-jandernery 