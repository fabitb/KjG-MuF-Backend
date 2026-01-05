# Base stage - common setup
FROM node:18-alpine AS base
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Development stage
FROM base AS development
ENV NODE_ENV=development

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy source code
COPY . .

# Expose application port
EXPOSE 3000

# Start with nodemon for hot reload
CMD ["npm", "run", "dev"]

# Builder stage - compile TypeScript
FROM base AS builder
ENV NODE_ENV=production

# Install all dependencies for building
RUN npm install

# Copy source code
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Production stage - minimal runtime image
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/build ./build

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose application port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/status', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application with node (Docker handles process management)
CMD ["node", "build/server.js"]
