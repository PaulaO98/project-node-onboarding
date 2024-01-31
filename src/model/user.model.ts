/**
 * Keep this file in sync with the code in the "Usage without strict types for
 * attributes" section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
import {Model, DataTypes } from "sequelize";

const USER_TABLE='User'

class User extends Model{

    static config(sequelize:any){
        return {
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}

const UserSchema={
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field:'ID'
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    field:'NAME'
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    field:'EMAIL'
  },
  phone: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
    field:'PHONE'
  }

}

export {USER_TABLE,UserSchema,User}