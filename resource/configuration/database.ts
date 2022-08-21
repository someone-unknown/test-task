import { Options as SequelizeOptions } from 'sequelize';

export const databaseOptions: SequelizeOptions = {
  host: 'db-1.cbbb0kkw7jyx.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'administrator',
  password: 'UKRdRsJhD0R8a4YFhW5XAF096m03TxqtbJ5aEnbw',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  database: 'not-paid-test-task',
  logging: false,
};

export default databaseOptions;