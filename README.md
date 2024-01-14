# nextjsPrismaMulipleDatabases
How to connect multiple databases in Prisma for Nextjs
__
__
# Usefull Commands
npm install prisma --save-dev <br />
npx prisma init --datasource-provider mysql__
__
--create multiple prisma.ts files in db folder__
touch lib/mysqlPrismaConnection.ts__
touch lib/pgsqlPrismaConnection.ts__
__
npm install @prisma/client__
__
--pull db schema models__
npx prisma db pull --schema .\prisma\mysql.prisma;__
npx prisma db pull --schema .\prisma\pqsql.prisma;__
__
--run generate__
npx prisma generate --schema .\prisma\mysql.prisma;__
npx prisma generate --schema .\prisma\pqsql.prisma;__
__
# To run the prisma studio__
npx prisma studio --schema /prisma/mysql.prisma__ 
npx prisma studio --schema /prisma/pqsql.prisma__
