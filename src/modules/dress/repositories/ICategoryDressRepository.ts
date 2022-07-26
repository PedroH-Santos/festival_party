import { ICreateCategoryDressDTO } from "../dtos/ICreateCategoryDressDTO";
import { CategoryDress } from "../infra/typeorm/entities/CategoryDress";



interface ICategoryDressRepository {
    create({ name,id }: ICreateCategoryDressDTO): Promise<CategoryDress>;
    getAll(): Promise<CategoryDress[]>;
    getById(id: string): Promise<CategoryDress>;
    delete(id: string): Promise<void>;
}

export {ICategoryDressRepository}