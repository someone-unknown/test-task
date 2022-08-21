import { createHash } from 'crypto';
import { DataTypes, Model, ModelStatic } from 'sequelize';
import { connection } from 'database/connection/db-1';

export interface User extends Model {
  id: number;
  email: string;
  password: string;
  instruments_access: boolean;
  updated_at: Date;
  created_at: Date;
}

export const User: ModelStatic<User> = connection.define('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  instruments_access: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  updated_at: DataTypes.DATE,
  created_at: DataTypes.DATE,
}, {
  timestamps: false,
  hooks: {
    beforeCreate(user: User) {
      user.password = createHash('sha256').update(user.password).digest('hex');
    }
  }
});

export default User;