import { ICreateCategoryProductDTO } from "../dtos/ICreateCategoryProductDTO";
import { CategoryProduct } from "../infra/typeorm/entities/CategoryProduct";



interface ICategoryProductRepository {
    create({ name,id }: ICreateCategoryProductDTO): Promise<CategoryProduct>;
    getAll(): Promise<CategoryProduct[]>;
    getById(id: string): Promise<CategoryProduct>;
    delete(id: string): Promise<void>;
}

export {ICategoryProductRepository}