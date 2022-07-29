
import { ICreateCategoryProductDTO } from "@modules/product/dtos/ICreateCategoryProductDTO";
import { ICategoryProductRepository } from "@modules/product/repositories/ICategoryProductRepository";
import { getRepository, Repository } from "typeorm";
import { CategoryProduct } from "../entities/CategoryProduct";



class CategoryProductRepository implements ICategoryProductRepository{
    private repository: Repository<CategoryProduct>;
    constructor(){
        this.repository = getRepository(CategoryProduct);
    }


    async create({name,id }: ICreateCategoryProductDTO): Promise<CategoryProduct> {
        const category = this.repository.create({name,id });
        await this.repository.save(category);
        return category;
        
    }
    async getById(id: string): Promise<CategoryProduct> {
        const category = await this.repository.findOne(id);
        return category;
    } 
    async getAll(): Promise<CategoryProduct[]>{
        const categories = await this.repository.find();
        return categories;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { CategoryProductRepository}