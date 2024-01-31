import {UserServiceImpl} from '../service';

export class UserController {

  userServiceImpl: UserServiceImpl;

  constructor(){
    this.userServiceImpl=new UserServiceImpl();
  }

  async getAllUsers ():Promise<any> {
    return await this.userServiceImpl.getUsers();
  }

  async getUser(id:number): Promise<any> {

    return await this.userServiceImpl.getUser(id);
  }

  async saveUser(body:any):Promise<any> {

    return await this.userServiceImpl.saveUser(body)
  }

  async updateUser(id:number, body:any):Promise<any>{

    return await this.userServiceImpl.updateUser(id, body);
  }
  
  async deleteUser(id:number):Promise<any>{
    return await this.userServiceImpl.deleteUser(id);
  }
}
