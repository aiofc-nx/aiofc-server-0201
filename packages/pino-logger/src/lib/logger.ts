/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, LoggerService } from '@nestjs/common';
import { Level } from 'pino';

import { PinoLogger } from './pino-logger';

@Injectable()
export class Logger implements LoggerService {
  private readonly contextName: string;

  constructor(protected logger: PinoLogger) {
    this.contextName = 'context';
  }

  verbose(message: any, ...optionalParams: any[]) {
    this.call('trace', message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]) {
    this.call('debug', message, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]) {
    this.call('info', message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    this.call('warn', message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    this.call('error', message, ...optionalParams);
  }

  fatal(message: any, ...optionalParams: any[]) {
    this.call('fatal', message, ...optionalParams);
  }

  setContext(context: string) {
    this.logger = this.logger.child({ context }) as unknown as PinoLogger;
    return this;
  }

  private call(level: Level, message: any, ...optionalParams: any[]) {
    const objArg: Record<string, any> = {};

    // optionalParams contains extra params passed to logger
    // context name is the last item
    let params: any[] = [];
    if (optionalParams.length !== 0) {
      objArg[this.contextName] = optionalParams[optionalParams.length - 1];
      params = optionalParams.slice(0, -1);
    }

    if (typeof message === 'object') {
      if (message instanceof Error) {
        objArg['err'] = message;
      } else {
        Object.assign(objArg, message);
      }
      this.logger[level](objArg, ...params);
    } else {
      this.logger[level](objArg, message, ...params);
    }
  }
}
