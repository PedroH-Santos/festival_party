import { ICreateCategoryAccessoryDTO } from "../dtos/ICreateCategoryAccessoryDTO";
import { CategoryAccessory } from "../infra/typeorm/entities/CategoryAccessory";



interface ICategoryAccessoryRepository {
    create({ name,id }: ICreateCategoryAccessoryDTO): Promise<CategoryAccessory>;
    getAll(): Promise<CategoryAccessory[]>;
    getById(id: string): Promise<CategoryAccessory>;
    delete(id: string): Promise<void>;
}

export {ICategoryAccessoryRepository}