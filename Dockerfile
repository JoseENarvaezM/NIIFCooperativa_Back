FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install && npm audit fix

COPY . .


RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
