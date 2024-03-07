FROM node:20 AS build-stage

RUN npm add --global nx@latest

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

RUN nx build-release backend

RUN npm ci --omit=dev

FROM node:20

# Install Google Chrome for PDF exports
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get update && apt-get install -y ./google-chrome-stable_current_amd64.deb

WORKDIR /app

COPY --from=build-stage /app/node_modules/ /app/node_modules/
COPY --from=build-stage /app/dist/apps/backend/ /app/

EXPOSE 3000

CMD ["node", "--env-file=./.env", "./main.js"]

