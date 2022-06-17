import { ICreateDressDTO } from "../dtos/ICreateDressDTO";
import { Dress } from "../infra/typeorm/entities/Dress";



interface IDressRepository {
    create({categoryId, name , price}: ICreateDressDTO): Promise<Dress>;
    getAll(): Promise<Dress[]>;
    getById(id: string): Promise<Dress>;
    delete(id: string): Promise<void>;
}

export {IDressRepository}