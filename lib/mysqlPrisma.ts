import { PrismaClient as MysqlClient } from "@/prisma/generated/mysqlClient";
declare global {
  var mysqlPrisma: MysqlClient;
}
let mysqlPrisma: MysqlClient;

if (process.env.NODE_ENV === "production") {
  mysqlPrisma = new MysqlClient();
} else {
  if (!global.mysqlPrisma) {
    global.mysqlPrisma = new MysqlClient();
  }
  mysqlPrisma = global.mysqlPrisma;
}

export default mysqlPrisma;
