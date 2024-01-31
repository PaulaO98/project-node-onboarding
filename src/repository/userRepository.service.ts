import { DataSource } from "../config/dataSource";

export class UserRepository {
  dbService: DataSource;
  models: any;

  constructor() {
    this.dbService = new DataSource();
    const { models } = this.dbService.sequelizeDB;
    this.models = models;
  }

  async findAll() {
    return await this.models.User.findAll();
  }

  async findById(id: number):Promise<any> {
    return await this.findOne(id);
  }

  async findOne(id: number):Promise<any> {
    const data =await this.models.User.findByPk(id)
    if (data) {
        const {dataValues} = data
        return dataValues
      }
    throw new Error("User not found");
  }

  async saveUser(body:any):Promise<any>{
    return await this.models.User.create(body)
  }

  async updateUser(id:number,body:any):Promise<any>{
    await this.findOne(id);
    return await this.models.User.update(body,{where:{id}})
  }

  async deleteUser(id:number):Promise<any>{
    await this.findOne(id);
    return await this.models.User.destroy({where:{id}})
  }
}
