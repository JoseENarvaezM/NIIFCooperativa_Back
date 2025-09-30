FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install && npm audit fix

COPY . .

EXPOSE 3000

RUN npx prisma generate

CMD ["npm", "run", "start"]
