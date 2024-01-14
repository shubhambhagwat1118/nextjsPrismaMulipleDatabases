# nextjsPrismaMulipleDatabases
How to connect multiple databases in Prisma for Nextjs
<br />
<br />
# Usefull Commands
npm install prisma --save-dev <br />
npx prisma init --datasource-provider mysql <br />
<br />
--create multiple prisma.ts files in db folder <br />
touch lib/mysqlPrismaConnection.ts <br />
touch lib/pgsqlPrismaConnection.ts <br />
<br />
npm install @prisma/client<br />
<br />
--pull db schema models <br />
npx prisma db pull --schema .\prisma\mysql.prisma; <br />
npx prisma db pull --schema .\prisma\pqsql.prisma; <br />
<br />
--run generate__
npx prisma generate --schema .\prisma\mysql.prisma; <br />
npx prisma generate --schema .\prisma\pqsql.prisma; <br />
<br />
# To run the prisma studio <br />
npx prisma studio --schema /prisma/mysql.prisma <br />
npx prisma studio --schema /prisma/pqsql.prisma <br />
