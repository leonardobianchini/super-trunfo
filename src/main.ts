import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ModelNotFoundExceptionFilter } from './exception-filters/model-not-found.exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ModelNotFoundExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Super trunfo api')
    .setDescription('Api to test some things with nestjs')
    .setVersion('1.0')
    .addTag('cars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
