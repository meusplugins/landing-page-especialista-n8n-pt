FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# 1) Instalar dependências (prod + dev) — sem package-lock, então usamos npm install
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 2) Copiar código e gerar build
COPY . .
RUN npm run build

# 3) Servir com Vite Preview (ajuste se usar outra coisa)
EXPOSE 4173
CMD ["npm", "run", "preview"]
