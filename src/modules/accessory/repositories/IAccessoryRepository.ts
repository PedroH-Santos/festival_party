import { ICreateAccessoryDTO } from "../dtos/ICreateAccessoryDTO";
import { Accessory } from "../infra/typeorm/entities/Accessory";



interface IAccessoryRepository {
    create({category_id, name , price}: ICreateAccessoryDTO): Promise<Accessory>;
    getAll(): Promise<Accessory[]>;
    getById(id: string): Promise<Accessory>;
    delete(id: string): Promise<void>;
}

export {IAccessoryRepository} 