FROM node:20

RUN npm i -g @angular/cli

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

VOLUME /app/node_modules

EXPOSE 4200

CMD ["npm", "run", "start:frontend"]



