
/** Conexion a la BD con sequelize*/

const { Sequelize } = require('sequelize');
import setupModels from "../model";

export class DataSource {
  sequelizeDB: any;

  constructor() {
    this.sequelizeDB = new Sequelize('XEPDB1', 'VIRTUALSTORE', 'admin', {
      host: 'localhost',
      dialect: 'oracle',
      dialectOptions: {
        connectString: 'localhost:1521/XEPDB1'
      }
    });
    
    setupModels(this.sequelizeDB)
    this.sequelizeDB.sync();
  }
}



