import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";



interface IProductRepository {
    create({category_id, name , price}: ICreateProductDTO): Promise<Product>;
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | undefined>;
    delete(id: string): Promise<void>;
}

export {IProductRepository}