[@aiofc-server/source](../../../../../../index.md) / apps/platform/src/database/schema/base.schema

# apps/platform/src/database/schema/base.schema

## Functions

### createTrackedTable()

```ts
function createTrackedTable<T>(tableName, columns): PgTableWithColumns<{}>
```

用于创建一个包含基础租户字段的数据库表的通用函数

#### Type Parameters

• **T** *extends* `Record`\<`string`, `any`\>

表的额外列定义的类型，必须是一个键值对对象

#### Parameters

##### tableName

`string`

要创建的表名

##### columns

`T` = `...`

要添加到基础字段之外的额外列定义

#### Returns

`PgTableWithColumns`\<\{\}\>

返回一个 PostgreSQL 表定义

#### Example

```typescript
const userTable = createTenantTable('user', {
  name: text('name').notNull(),
  email: text('email').notNull()
});
```
