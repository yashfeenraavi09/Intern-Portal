#!/usr/bin/env bash

# Build frontend
cd frontend
npm install
npm run build || exit 1

# Copy dist to backend
cp -r dist ../backend/dist

# Install backend dependencies
cd ../backend
npm install
