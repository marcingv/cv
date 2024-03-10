FROM node:20-alpine AS build-stage

RUN npm add --global nx@latest

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

RUN nx build-release backend

RUN npm ci --omit=dev

FROM node:20-alpine

# Install Google Chrome for PDF exports
RUN apk --update --upgrade add chromium

WORKDIR /app

COPY --from=build-stage /app/node_modules/ /app/node_modules/
COPY --from=build-stage /app/dist/apps/backend/ /app/

EXPOSE 3000

CMD ["node", "--env-file=./.env", "./main.js"]

