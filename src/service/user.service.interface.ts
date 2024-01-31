export interface UserService {
    getUsers(): Promise<any>;
    getUser(id: number): Promise<any>;
    saveUser(body:any):Promise<any>;
    updateUser(id:number,body:any):Promise<any>;
    deleteUser(id:number):Promise<any>;

}