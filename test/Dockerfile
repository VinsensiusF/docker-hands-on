# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY . .
RUN npm install

# Build the Next.js application
RUN npm run build

# Expose port 8081
EXPOSE 8081

# Start the Next.js application
CMD ["npm", "start"]
