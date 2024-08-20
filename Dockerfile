# Menggunakan image node sebagai base image
FROM node:18-alpine AS builder

# Install git
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json untuk menginstall dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke dalam container
COPY . .

# Build aplikasi
RUN npm run build

# Stage final untuk menjalankan aplikasi
FROM node:18-alpine AS runner

WORKDIR /app

# Copy output build dari stage builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install production dependencies
RUN npm install --production

# Expose port dan jalankan aplikasi
EXPOSE 3000
CMD ["npm", "run", "start"]
