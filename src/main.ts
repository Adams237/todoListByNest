import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // activer la validation globale définit dans le dto
  app.useGlobalPipes( new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
