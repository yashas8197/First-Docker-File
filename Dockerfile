# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the JavaScript file to the working directory
COPY app.js .

# Command to run the JavaScript file
CMD ["node", "app.js"]
