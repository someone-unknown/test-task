import { Sequelize } from 'sequelize';
import { databaseOptions } from 'configuration/database';

export const connection: Sequelize = new Sequelize(databaseOptions);

export default connection;