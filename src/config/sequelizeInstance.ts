import { Sequelize } from "sequelize";
import { ENVIRONMENT } from "../../env-configs";

const { db_name, db_username, db_password, db_host, db_port } = ENVIRONMENT;

export const sequelizeInstance = () => {
  return new Sequelize(
    db_name as string,
    db_username as string,
    db_password as string,
    {
      host: db_host,
      dialect: "postgres",
      port: db_port,
      pool: {
        max: 20,
        min: 0,
        acquire: 60000,
      },
    },
  );
};