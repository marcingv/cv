# Docker build

## Building prod images

**!!! Run commands inside of workspace root !!!**

```bash
docker build --file apps/frontend-angular/prod.Dockerfile --tag marcingv/cv-frontend-angular:latest .
docker build --file apps/backend/prod.Dockerfile --tag marcingv/cv-backend-nestjs:latest .
```

## Entering image bash

```bash
docker run --rm -it --entrypoint bash marcingv/cv-frontend-angular
docker run --rm -it --entrypoint bash marcingv/cv-backend-nestjs
```

## Running prod images with docker-compose

```bash
docker-compose -f docker-compose.prod.yml up
```

## Pushing to Docker HUB

```bash
docker push marcingv/cv-backend-nestjs:latest
docker push marcingv/cv-frontend-angular:latest
```
