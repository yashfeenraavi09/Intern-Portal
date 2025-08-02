#!/usr/bin/env bash

# Install backend dependencies
cd backend
npm install

# Install frontend deps and build
cd ../frontend
npm install
npm run build

# Copy frontend build to backend/public
rm -rf ../backend/public
mkdir ../backend/public
cp -r dist/* ../backend/public
