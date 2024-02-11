FROM node:20

RUN npm add --global nx@latest

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

VOLUME /app/node_modules

EXPOSE 4200

CMD ["nx", "serve", "frontend"]



