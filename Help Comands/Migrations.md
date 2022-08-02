## Criar uma model 

Comando:
>npx sequelize model:generate --name [Nome da Model] --attributes [Nome da coluna]:[tipo da coluna]

Exemplo:
>npx sequelize model:generate --name User --attributes fullName:string

## Gerar migration
Comando:
>npx sequelize migration:generate --name [Nome da migration]

Exemplo:

>npx sequelize migration:generate --name add-column-phone-table-users

## Rodar as migrations
>npx sequelize db:migrate


## Voltar a migration:
Comando:
>npx sequelize db:migrate:undo