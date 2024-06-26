import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../infra/typeorm/entities/Client";




interface IClientRepository {
    create({id,name,email,phone}: ICreateClientDTO): Promise<Client>;
    getAll(): Promise<Client[]>;
    getCountAll(search: string): Promise<number>;
    getWithPagination(page: number,search: string): Promise<Client[]>;
    getById(id: string): Promise<Client>;
    getByEmail(email: string): Promise<Client>;
    delete(id: string): Promise<void>;
}


export { IClientRepository } 