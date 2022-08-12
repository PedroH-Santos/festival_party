import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";




interface IUserRepository {
    create({id,name,email,password}: ICreateUserDTO): Promise<User>;
    getAll(): Promise<User[]>;
    getCountAll(search: string): Promise<number>;
    getWithPagination(page: number,search: string): Promise<User[]>;
    getByEmail(email: string): Promise<User>;
    getByEmailWithPassword(email: string): Promise<User>;
    getById(id: string): Promise<User>;
    delete(id: string): Promise<void>;
}


export { IUserRepository } 