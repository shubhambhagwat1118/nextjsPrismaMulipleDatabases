import mysqlPrisma from "@/lib/mysqlPrisma";
import pgsqlPrisma from "@/lib/pgsqlPrisma";

export default async function Home() {
  const mysqlReports = await mysqlPrisma.reports.findMany();
  const mysqlUsers = await mysqlPrisma.users.findMany();
  const pgsqlLeads = await pgsqlPrisma.leads.findMany();
  const pgsqlUsers = await pgsqlPrisma.users.findMany();

  return (
    <div>
      <p>{JSON.stringify(mysqlReports)}</p>
      <p>{JSON.stringify(mysqlUsers)}</p>
      <p>{JSON.stringify(pgsqlLeads)}</p>
      <p>{JSON.stringify(pgsqlUsers)}</p>
    </div>
  );
}
