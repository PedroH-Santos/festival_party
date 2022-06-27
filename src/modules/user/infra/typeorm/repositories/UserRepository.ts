import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { Repository, getRepository } from "typeorm"; 

import { User } from "../entities/User";




class UserRepository implements IUserRepository {
    private repository: Repository<User>
    constructor(){
        this.repository = getRepository(User);
    }
    
    async create({ id, name, email }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({ id, name, email});    
        await this.repository.save(user);
        return user;

    }
    async getAll(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
    async getById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    } 
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}


export {UserRepository}