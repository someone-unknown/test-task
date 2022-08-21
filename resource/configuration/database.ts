import { Options as SequelizeOptions } from 'sequelize';

export const databaseOptions: SequelizeOptions = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(String(process.env.DATABASE_PORT), 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  database: 'not-paid-test-task',
  logging: false,
};

export default databaseOptions;