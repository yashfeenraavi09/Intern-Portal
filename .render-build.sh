#!/usr/bin/env bash

# Inside .render-build.sh
cd frontend
npm install
npm run build

# Copy dist to backend/public
mkdir -p ../backend/public
cp -r dist/* ../backend/public

cd ../backend
npm install
