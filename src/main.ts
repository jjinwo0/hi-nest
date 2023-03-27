import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //한번 Validation에 걸리면 이후 데이터는 검증하지 않음.
    forbidNonWhitelisted: true//이상한 데이터가 넘어오면, request 자체를 막아버림.
  }))
  await app.listen(3000);
}
bootstrap();
