# nextjsPrismaMulipleDatabases
How to connect multiple databases in Prisma for Nextjs


# Usefull Commands
npm install prisma --save-dev
npx prisma init --datasource-provider mysql

--create multiple prisma.ts files in db folder
touch lib/mysqlPrismaConnection.ts
touch lib/pgsqlPrismaConnection.ts

npm install @prisma/client

--pull db schema models
npx prisma db pull --schema .\prisma\mysql.prisma;
npx prisma db pull --schema .\prisma\pqsql.prisma;

--run generate
npx prisma generate --schema .\prisma\mysql.prisma;
npx prisma generate --schema .\prisma\pqsql.prisma;

# To run the prisma studio
npx prisma studio --schema /prisma/mysql.prisma
npx prisma studio --schema /prisma/pqsql.prisma
