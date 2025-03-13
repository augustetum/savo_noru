# Use an official Node.js image to build the application
FROM node:18.18.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the project source code to the container
COPY . .

# Build the application using Vite
RUN npm run build

# Use a smaller Node.js image to serve the built application
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the build output to the container
COPY --from=build /app/dist /app

# Install a simple HTTP server to serve the built application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", ".", "-l", "5000"]