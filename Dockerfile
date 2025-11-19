FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Se você usa lockfile, troque npm install por npm ci:
COPY package*.json ./

# Instala com fallback de peer-deps
RUN npm ci --only=production --legacy-peer-deps

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
