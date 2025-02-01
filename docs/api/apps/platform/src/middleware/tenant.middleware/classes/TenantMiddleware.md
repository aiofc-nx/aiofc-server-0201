[@aiofc-server/source](../../../../../../index.md) / [apps/platform/src/middleware/tenant.middleware](../index.md) / TenantMiddleware

# Class: TenantMiddleware

## Implements

- `NestMiddleware`

## Constructors

### new TenantMiddleware()

```ts
new TenantMiddleware(
   tenantContext, 
   configService, 
   logger): TenantMiddleware
```

#### Parameters

##### tenantContext

[`TenantContext`](../../../database/tenant.context/classes/TenantContext.md)

##### configService

[`ConfigService`](../../../config/config.service/classes/ConfigService.md)

##### logger

[`PinoLogger`](../../../../../../packages/pino-logger/src/lib/pino-logger/classes/PinoLogger.md)

#### Returns

[`TenantMiddleware`](TenantMiddleware.md)

## Properties

### configService

```ts
private readonly configService: ConfigService;
```

***

### logger

```ts
private readonly logger: PinoLogger;
```

***

### tenantContext

```ts
private readonly tenantContext: TenantContext;
```

## Methods

### use()

```ts
use(
   req, 
   res, 
   next): void
```

#### Parameters

##### req

`FastifyRequest`\<`IncomingMessage`, `ResolveFastifyRequestType`\<`FastifyTypeProviderDefault`, `FastifySchema`, `RouteGenericInterface`\>\>

##### res

`ServerResponse`

##### next

() => `void`

#### Returns

`void`

#### Implementation of

```ts
NestMiddleware.use
```
