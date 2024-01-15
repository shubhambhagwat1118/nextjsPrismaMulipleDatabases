# nextjsPrismaMulipleDatabases
How to connect multiple databases in Prisma for Nextjs
<br />
<br />
# Usefull Commands
npm install prisma --save-dev <br />
npx prisma init --datasource-provider mysql <br />
--edit the file name from prisma to mysql.prisma and copy the same file to use multiple prisma dbs <br />
<br />
npm install @prisma/client<br />
<br />
--pull db schema models <br />
npx prisma db pull --schema .\prisma\mysql.prisma; <br />
npx prisma db pull --schema .\prisma\pqsql.prisma; <br />
<br />
--run generate__ <br />
npx prisma generate --schema .\prisma\mysql.prisma; <br />
npx prisma generate --schema .\prisma\pqsql.prisma; <br />
<br />
--create multiple prisma.ts files in db folder <br />
touch lib/mysqlPrismaConnection.ts <br />
touch lib/pgsqlPrismaConnection.ts <br />
<br />
# To run the prisma studio(optional) <br />
npx prisma studio --schema /prisma/mysql.prisma <br />
npx prisma studio --schema /prisma/pqsql.prisma <br />
