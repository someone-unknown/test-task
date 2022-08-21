import { DataTypes, Model, ModelStatic } from 'sequelize';
import { connection } from 'database/connection/db-1';

export interface Instrument extends Model {
  id: number;
  instrument_symbol: string;
  instrument_name: string;
  usd_price: number;
  updated_at: Date;
  created_at: Date;
}

export const Instrument: ModelStatic<Instrument> = connection.define('instrument', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  instrument_symbol: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  instrument_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  usd_price: {
    type: DataTypes.FLOAT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
  updated_at: DataTypes.DATE,
  created_at: DataTypes.DATE,
}, {
  timestamps: false,
});

export default Instrument;