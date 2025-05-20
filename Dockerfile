FROM node:alpine
WORKDIR /app
COPY ./server ./server
COPY ./blockchain ./blockchain
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["node", "server/index.js"]
