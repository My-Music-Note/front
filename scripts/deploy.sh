#!/usr/bin/env bash

# Define the directory where your React app will be deployed
REPOSITORY=/home/ec2-user/front
BUILD_DIR=$REPOSITORY/build

# Navigate to the repository
cd $REPOSITORY || { echo "Failed to navigate to $REPOSITORY"; exit 1; }

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "> Build directory does not exist: $BUILD_DIR"
  exit 1
fi

# Ensure /var/www/html exists
if [ ! -d "/var/www/html" ]; then
  echo "> Creating /var/www/html"
  sudo mkdir -p /var/www/html
fi

# Remove old files from /var/www/html
echo "> Clearing /var/www/html"
sudo rm -rf /var/www/html/*

# Copy new build files to /var/www/html
echo "> Copying new build to /var/www/html"
sudo cp -r $BUILD_DIR/* /var/www/html/

# Set ownership and permissions
sudo chown -R nginx:nginx /var/www/html
sudo chmod -R 755 /var/www/html

# Restart Nginx
echo "> Restarting Nginx"
sudo systemctl restart nginx

echo "> React app deployed successfully"
