FROM node:22-alpine3.19

WORKDIR /app

RUN apk add --no-cache git

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
