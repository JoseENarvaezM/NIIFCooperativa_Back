FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generar prisma y compilar TS
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
