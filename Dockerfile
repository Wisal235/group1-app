# Use Node.js to build the React app
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

# Run the app on port 3000
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]