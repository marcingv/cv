# GvCv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

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
