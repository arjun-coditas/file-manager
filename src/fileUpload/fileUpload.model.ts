import { DataTypes } from "sequelize";
import { sequelize } from "../config/databaseConnection";
import { dbTableName } from "../config/database.constants";

export const FileModel = sequelize.define(
  dbTableName.FILES,
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originalName: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);
