import { ICreateImageProductDTO } from "../dtos/ICreateImageProductDTO";
import { ImageProduct } from "../infra/typeorm/entities/ImageProduct";

interface IImageProductRepository {
    create({image,product_id}: ICreateImageProductDTO): Promise<ImageProduct>;
    getAll(): Promise<ImageProduct[]>;
    getByIdProduct(product_id: string): Promise<ImageProduct>;
    delete(id: string): Promise<void>;
}

export {IImageProductRepository}