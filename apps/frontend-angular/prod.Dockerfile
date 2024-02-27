FROM node:20 AS build-stage

RUN npm add --global nx@latest

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

RUN nx build-release frontend-angular

FROM node:20

WORKDIR /app

COPY --from=build-stage /app/dist/apps/frontend-angular/ /app/

EXPOSE 4000

CMD ["node", "--env-file=./server/.env", "./server/server.mjs"]

