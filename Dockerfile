FROM node:17-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./src ./
RUN npx tsc

EXPOSE 3001
CMD ["node", "./dist/app.js"]