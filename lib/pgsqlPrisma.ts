import { PrismaClient as pgsqlClient } from "@/prisma/generated/pgsqlClient";
declare global {
  var pgsqlPrisma: pgsqlClient;
}
let pgsqlPrisma: pgsqlClient;

if (process.env.NODE_ENV === "production") {
  pgsqlPrisma = new pgsqlClient();
} else {
  if (!global.pgsqlPrisma) {
    global.pgsqlPrisma = new pgsqlClient();
  }
  pgsqlPrisma = global.pgsqlPrisma;
}

export default pgsqlPrisma;
