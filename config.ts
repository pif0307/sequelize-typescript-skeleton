import * as dotenv from "dotenv";
dotenv.config();

export = {
  development: {
    username: process.env.DB_DEVELOPMENT_USERNAME || "root",
    password: process.env.DB_DEVELOPMENT_PASSWORD,
    database: process.env.DB_DEVELOPMENT_DATABASE || "database_default_name",
    host: process.env.DB_DEVELOPMENT_HOST || "localhost",
    port: process.env.DB_DEVELOPMENT_PORT || 3306,
    dialect: process.env.DB_DEVELOPMENT_DIALECT || "mysql",
  },
};
