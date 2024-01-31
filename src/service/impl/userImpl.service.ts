import { UserService } from "../user.service.interface";
import {UserRepository} from '../../repository/userRepository.service'

export class UserServiceImpl implements UserService {
    

    userRepository: UserRepository;

    constructor(){
        this.userRepository=new UserRepository();
    }    
    async updateUser(id: number, body: any):Promise<any> {
        return await this.userRepository.updateUser(id,body);
    }

    async deleteUser(id: number): Promise<any> {
        return await this.userRepository.deleteUser(id);
    }

    async saveUser(body: any):Promise<any> {
        return await this.userRepository.saveUser(body);
    }
    
    async getUser(id: number):Promise<any> {
        return await this.userRepository.findById(id);
    }

    async getUserId(id: number):Promise<any> {
        return await this.userRepository.findById(id);
    }
    
    async getUsers(): Promise<any> {
        return await this.userRepository.findAll();
    }
}