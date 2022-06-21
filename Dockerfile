FROM node:16.15.0

WORKDIR /usr

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]