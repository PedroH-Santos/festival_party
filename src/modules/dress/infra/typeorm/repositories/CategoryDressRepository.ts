import { ICreateCategoryDressDTO } from "@modules/dress/dtos/ICreateCategoryDressDTO";
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { getRepository, Repository } from "typeorm";
import { CategoryDress } from "../entities/CategoryDress";



class CategoryDressRepository implements ICategoryDressRepository{
    private repository: Repository<CategoryDress>;
    constructor(){
        this.repository = getRepository(CategoryDress);
    }


    async create({name,id }: ICreateCategoryDressDTO): Promise<CategoryDress> {
        const category = this.repository.create({name,id });
        await this.repository.save(category);
        return category;
        
    }
    async getById(id: string): Promise<CategoryDress> {
        const category = await this.repository.findOne(id);
        return category;
    } 
    async getAll(): Promise<CategoryDress[]>{
        const categories = await this.repository.find();
        return categories;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { CategoryDressRepository}