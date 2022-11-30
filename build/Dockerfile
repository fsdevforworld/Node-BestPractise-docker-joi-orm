FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install --production

CMD [ "npm", "start" ]