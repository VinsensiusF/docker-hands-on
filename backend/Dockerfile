# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Documents the exposed port 8080
EXPOSE 8080

# Command to start the app
CMD ["node", "index.js"]
