# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Expose the port that Cloud Run will use
EXPOSE 8080

# Set environment variable for port (Cloud Run provides this)
ENV PORT=8080

# Start the server
CMD ["npm", "start"]

