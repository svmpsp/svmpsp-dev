import pg from "pg";
const { Client } = pg;

export default defineNitroPlugin(async (nitroApp) => {
  const {
    postgresUser,
    postgresDb,
    postgresHost,
    postgresPassword,
    postgresPort,
  } = useRuntimeConfig();

  console.log(
    `Connecting to POSTGRES at http://${postgresHost}:${postgresPort}`,
  );
  console.log(`Connection string: username=${postgresUser} db=${postgresDb}`);

  const client = new Client({
    user: postgresUser,
    host: postgresHost,
    database: postgresDb,
    password: postgresPassword,
    port: Number(postgresPort),
  });

  await client.connect();

  nitroApp.hooks.hook("request", (event) => {
    event.context.dbClient = client;
  });
});
