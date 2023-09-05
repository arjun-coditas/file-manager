import { config } from "dotenv";

config();

export const ENVIRONMENT = {
  db_username: process.env.DB_USER_NAME,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  db_host: process.env.DB_HOST,
  db_port: parseInt(process.env.DB_PORT || "5432"),
  development_port: process.env.DEVELOPMENT_PORT,
  environment: process.env.ENVIRONMENT,
};
