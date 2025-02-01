import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ConfigModule } from './config/config.module';
import { LoggerModule, SimpleLoggingInterceptor } from '@aiofc/pino-logger';
import { ConfigService } from './config/config.service';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  I18nJsonLoader,
  QueryResolver,
} from 'nestjs-i18n';
import path from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core/constants';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRoot({
      pinoHttp: {
        name: 'GlobalExceptionFilter',
      },
    }),
    I18nModule.forRootAsync({
      useFactory: () => ({
        fallbackLanguage: 'zh',
        loaderOptions: {
          path: path.join(__dirname, 'i18n'),
          watch: true,
          includeSubfolders: true,
        },
        loaders: [I18nJsonLoader],
        typesOutputPath: path.join(
          __dirname,
          '../../../apps/platform/src/generated/i18n.generated.ts'
        ),
        logging: true,
        debug: true,
      }),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: APP_INTERCEPTOR,
      useClass: SimpleLoggingInterceptor,
    },
    GlobalExceptionFilter,
  ],
  exports: [AppService],
})
export class AppModule {}
