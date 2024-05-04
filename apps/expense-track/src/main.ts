/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { useContainer } from 'class-validator'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  const docPrefix = 'docs'

  app.setGlobalPrefix(globalPrefix)
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new BadRequestException(
          errors.map((e) => ({
            message: Object.values(e.constraints)[0],
            property: e.property,
          }))
        )
      },
    })
  )
  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  const port = process.env.PORT || 3000

  const config = new DocumentBuilder()
    .setTitle('Expense track API')
    .setDescription('API builded with Nest JS')
    .setVersion('1.0')
    .setExternalDoc('Download JSON Specifications', '/docs-json')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(docPrefix, app, document)
  app.enableCors()
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
  Logger.log(
    `🚀 Application docs is running on: http://localhost:${port}/${docPrefix}`
  )
}

bootstrap()
