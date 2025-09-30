FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .

# Generar prisma y compilar TS
RUN npx prisma generate
RUN npm run build

# ----------------------------
# Imagen final
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist 

EXPOSE 3000

CMD ["npm", "run", "start"]
