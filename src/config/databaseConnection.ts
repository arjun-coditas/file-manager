import { sequelizeInstance } from "./sequelizeInstance";


const sequelize = sequelizeInstance();

export const connectToDatabase = async () => {
  await sequelize.authenticate();
  if (sequelize) {
    console.log("Database Connected Successfully 🤟");
  } else {
    console.log("Something Went Wrong With Database Connection 😭");
  }
};

export { sequelize };
