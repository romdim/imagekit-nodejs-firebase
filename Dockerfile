FROM node:10
WORKDIR /app

RUN npm install -g firebase-tools

COPY ./functions/package*.json ./functions/
RUN cd functions && npm install

COPY ./ ./

WORKDIR /app/functions
CMD ["npm", "run", "serve"]