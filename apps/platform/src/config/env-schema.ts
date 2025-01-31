import { z } from 'zod';
import { Environment } from '../common/enums/environment.enum';
import { TenantIsolationStrategy } from '../common/enums/tenant.enum';

export const EnvSchema = z.object({
  /**
   * API服务配置部分
   */
  app: z.object({
    port: z.coerce.number().default(3000), // API服务端口，默认3000
    globalPrefix: z.string().default('api'), // API全局路由前缀，默认'api'
    NODE_ENV: z
      .enum([Environment.DEVELOPMENT, Environment.PRODUCTION, Environment.TEST])
      .default(Environment.DEVELOPMENT), // 环境变量，默认'development'
  }),

  /**
   * 日志配置部分
   */
  logger: z.object({
    trackingIdHeader: z.coerce.string().optional(), // 可选的追踪ID请求头
  }),

  /**
   * 数据库配置部分
   */
  database: z.object({
    user: z.string(), // 数据库用户名
    password: z.string(), // 数据库密码
    host: z.string(), // 数据库主机地址
    port: z.coerce.number().default(5432),
    name: z.string(), // 数据库名称
    pool: z
      .object({
        max: z.number().optional(),
        min: z.number().optional(),
        idle_timeout: z.number().optional(),
        connect_timeout: z.number().optional(),
        max_lifetime: z.number().optional(),
      })
      .optional(),
    isolationStrategy: z
      .nativeEnum(TenantIsolationStrategy)
      .default(TenantIsolationStrategy.SCHEMA),
  }),

  /**
   * 中间件配置部分
   */
  middleware: z.object({
    excludedPaths: z.array(z.string()).default([]), // 中间件排除路径
  }),

  /**
   * 租户配置部分
   */
  tenant: z
    .object({
      databaseIsolation: z.boolean().default(false),
      schemaIsolation: z.boolean().default(true),
      schemaHeader: z.string().default('x-tenant-schema'),
      databaseHeader: z.string().default('x-tenant-database'),
    })
    .refine(
      (data) => {
        // 确保databaseIsolation和schemaIsolation是互斥的
        return data.databaseIsolation !== data.schemaIsolation;
      },
      {
        message: 'databaseIsolation和schemaIsolation必须且只能选择其一',
        path: ['tenant'],
      }
    ),
});

export type EnvValidatedConfig = z.infer<typeof EnvSchema>;
