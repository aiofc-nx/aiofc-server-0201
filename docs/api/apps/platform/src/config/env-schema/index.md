[@aiofc-server/source](../../../../../index.md) / apps/platform/src/config/env-schema

# apps/platform/src/config/env-schema

## Type Aliases

### EnvValidatedConfig

```ts
type EnvValidatedConfig = z.infer<typeof EnvSchema>;
```

## Variables

### EnvSchema

```ts
const EnvSchema: ZodObject<{
  app: ZodObject<{
     globalPrefix: ZodDefault<ZodString>;
     NODE_ENV: ZodDefault<ZodEnum<[DEVELOPMENT, PRODUCTION, TEST]>>;
     port: ZodDefault<ZodNumber>;
    }, "strip", {
     globalPrefix: string;
     NODE_ENV: Environment;
     port: number;
    }, {
     globalPrefix: string;
     NODE_ENV: Environment;
     port: number;
    }>;
  database: ZodObject<{
     host: ZodString;
     name: ZodString;
     password: ZodString;
     pool: ZodOptional<ZodObject<{
        connect_timeout: ZodOptional<ZodNumber>;
        idle_timeout: ZodOptional<ZodNumber>;
        max: ZodOptional<ZodNumber>;
        max_lifetime: ZodOptional<ZodNumber>;
        min: ZodOptional<ZodNumber>;
       }, "strip", {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       }, {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       }>>;
     port: ZodDefault<ZodNumber>;
     user: ZodString;
    }, "strip", {
     host: string;
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     user: string;
    }, {
     host: string;
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     user: string;
    }>;
  middleware: ZodObject<{
     excludedPaths: ZodDefault<ZodArray<ZodString>>;
    }, "strip", {
     excludedPaths: string[];
    }, {
     excludedPaths: string[];
    }>;
  tenant: ZodObject<{
     tenantIdHeader: ZodOptional<ZodString>;
    }, "strip", {
     tenantIdHeader: string;
    }, {
     tenantIdHeader: string;
    }>;
 }, "strip", {
  app: {
     globalPrefix: string;
     NODE_ENV: Environment;
     port: number;
    };
  database: {
     host: string;
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     user: string;
    };
  middleware: {
     excludedPaths: string[];
    };
  tenant: {
     tenantIdHeader: string;
    };
 }, {
  app: {
     globalPrefix: string;
     NODE_ENV: Environment;
     port: number;
    };
  database: {
     host: string;
     name: string;
     password: string;
     pool: {
        connect_timeout: number;
        idle_timeout: number;
        max: number;
        max_lifetime: number;
        min: number;
       };
     port: number;
     user: string;
    };
  middleware: {
     excludedPaths: string[];
    };
  tenant: {
     tenantIdHeader: string;
    };
}>;
```
