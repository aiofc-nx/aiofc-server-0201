import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ConfigModule } from './config/config.module';
import {
  DetailedLoggingInterceptor,
  LoggerModule,
  loggingInitConfig,
  SimpleLoggingInterceptor,
} from '@aiofc/pino-logger';
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

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRootAsync(loggingInitConfig) as Promise<DynamicModule>,
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
      provide: APP_INTERCEPTOR, // nestjs 内置的令牌
      useClass:
        process.env.NODE_ENV === 'development'
          ? DetailedLoggingInterceptor
          : SimpleLoggingInterceptor,
    },
  ],
  exports: [AppService],
})
export class AppModule {}
