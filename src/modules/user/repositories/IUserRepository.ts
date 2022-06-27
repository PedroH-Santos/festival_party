import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";




interface IUserRepository {
    create({id,name,email}: ICreateUserDTO): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    delete(id: string): Promise<void>;
}


export { IUserRepository } 