FROM node:20

RUN npm add --global nx@latest

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

EXPOSE 4200

# Removing *.sock files on startup, before app serve.
# Helps to get rid of EADDRINUSE problem
# Problem details: https://github.com/nrwl/nx/issues/21610
CMD find /tmp/ -name "*.sock" -delete;nx serve frontend-angular



