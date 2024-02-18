FROM node:20

RUN npm add --global nx@latest

# Install Google Chrome for PDF exports
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get update && apt-get install -y ./google-chrome-stable_current_amd64.deb

WORKDIR /app

COPY ../../package.json package-lock.json /app/

RUN npm ci

COPY ../.. .

EXPOSE 3000

CMD ["nx", "serve", "backend"]



