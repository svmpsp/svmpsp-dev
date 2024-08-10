import pg from "pg";
const { Client } = pg;

export default defineNitroPlugin(async (nitroApp) => {
  const postgresConfig = useRuntimeConfig().postgres;

  const client = new Client({
    user: postgresConfig.user,
    host: postgresConfig.host,
    database: postgresConfig.db,
    password: postgresConfig.pwd,
    port: Number(postgresConfig.port),
  });

  await client.connect();

  nitroApp.hooks.hook("request", (event) => {
    event.context.dbClient = client;
  });
});
