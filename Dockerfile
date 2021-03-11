FROM node:10-alpine

RUN mkdir app

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
