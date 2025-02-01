[@aiofc-server/source](../../../../../../index.md) / [apps/platform/src/database/database.service](../index.md) / DatabaseService

# Class: DatabaseService

## Constructors

### new DatabaseService()

```ts
new DatabaseService(db, client): DatabaseService
```

#### Parameters

##### db

`PostgresJsDatabase`\<[`apps/platform/src/database/schema`](../../schema/index.md)\>

##### client

`Sql`

#### Returns

[`DatabaseService`](DatabaseService.md)

## Properties

### client

```ts
private readonly client: Sql;
```

***

### db

```ts
private readonly db: PostgresJsDatabase<apps/platform/src/database/schema>;
```

## Methods

### getClient()

```ts
getClient(): Sql
```

#### Returns

`Sql`

***

### getDb()

```ts
getDb(): PostgresJsDatabase<apps/platform/src/database/schema>
```

#### Returns

`PostgresJsDatabase`\<[`apps/platform/src/database/schema`](../../schema/index.md)\>
