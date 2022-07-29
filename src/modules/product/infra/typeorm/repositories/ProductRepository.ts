
import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";




class ProductRepository implements IProductRepository{
    private repository: Repository<Product>; 
    constructor(){
        this.repository = getRepository(Product);
    }



    async create({category_id, name , price,id}: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({category_id, name , price,id});
        await this.repository.save(product);
        return product;
        
    }

    async getAll(): Promise<Product[]>{
        const products = await this.repository.find({
            relations: ["category","images"]
        });
        return products;
    }
    async getById(id: string): Promise<Product> {
        const product = await this.repository.findOne(id,{
            relations: ["category","images"]

        });
        return product;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { ProductRepository}