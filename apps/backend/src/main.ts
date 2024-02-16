/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const swaggerEnabled = process.env.API_DOC_ENABLED === 'true';
  if (swaggerEnabled) {
    configureSwaggerApiDoc(app);
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

function configureSwaggerApiDoc(app: INestApplication) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('CV API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('doc', app, swaggerDocument, {
    useGlobalPrefix: true,
  });
}

bootstrap();
