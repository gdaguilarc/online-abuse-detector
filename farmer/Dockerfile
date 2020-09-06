FROM node:10-slim

COPY . .
RUN npm install

EXPOSE 3000

RUN npm i knex -g
#RUN knex migrate:latest

CMD ["node", "index.js"]  