FROM node:22-alpine3.19

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json yarn.lock ./

# Install dependencies, including those needed to build the app
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 8080

# Start the application in production mode
CMD ["yarn", "start"]
