# ----------------------------------
# Build stage
# ----------------------------------
    FROM node:23-alpine AS builder

    # Accept build-time arguments
    ARG NEXT_PUBLIC_API_URL
    ARG NEXT_PUBLIC_SENTRY_AUTH_TOKEN
    
    # Make them available during the build
    ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
    ENV NEXT_PUBLIC_SENTRY_AUTH_TOKEN=$NEXT_PUBLIC_SENTRY_AUTH_TOKEN
    
    WORKDIR /app
    
    COPY package.json package-lock.json ./
    RUN npm install
    COPY . .
    
    RUN npm run build
    
    # ----------------------------------
    # Production stage
    # ----------------------------------
    FROM node:23-alpine
    WORKDIR /app
    
    COPY --from=builder /app ./
    
    EXPOSE 3000
    CMD ["npm", "start"]