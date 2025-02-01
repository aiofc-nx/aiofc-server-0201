[@aiofc-server/source](../../../../../../index.md) / apps/platform/src/database/schema/tenant.schema

# apps/platform/src/database/schema/tenant.schema

## Type Aliases

### NewTenant

```ts
type NewTenant = typeof tenantTable.$inferInsert;
```

***

### Tenant

```ts
type Tenant = typeof tenantTable.$inferSelect;
```

## Variables

### tenantRelations

```ts
const tenantRelations: Relations<{
  users: Many<string>;
}>;
```

***

### tenantTable

```ts
const tenantTable: PgTableWithColumns<{}>;
```
