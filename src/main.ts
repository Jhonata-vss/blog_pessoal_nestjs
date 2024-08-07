import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Jhonata Venicius","https://github.com/Jhonata-vss","jhonatasenac15@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/swagger',app,document);

  process.env.TZ = '03:00'; // Configurar o TZ para não dar erro ao trabalharmos com datas

  app.useGlobalPipes(new ValidationPipe()); // Habilitando o Validation para fazer a validação dos dados (@NotNull,etc)
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}

bootstrap();