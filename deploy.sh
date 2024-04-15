#!/bin/sh
echo "Deploy Initialised"

git pull origin main

yarn install --frozen-lockfile

yarn build

pm2 restart portfolio-jandernery 