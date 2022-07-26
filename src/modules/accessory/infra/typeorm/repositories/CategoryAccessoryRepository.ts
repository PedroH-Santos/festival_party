
import { getRepository, Repository } from "typeorm";
import { ICreateCategoryAccessoryDTO } from "../../../dtos/ICreateCategoryAccessoryDTO";
import { ICategoryAccessoryRepository } from "../../../repositories/ICategoryAccessoryRepository";
import { CategoryAccessory } from "../entities/CategoryAccessory";



class CategoryAccessoryRepository implements ICategoryAccessoryRepository{
    private repository: Repository<CategoryAccessory>;
    constructor(){
        this.repository = getRepository(CategoryAccessory);
    }


    async create({name,id }: ICreateCategoryAccessoryDTO): Promise<CategoryAccessory> {
        const category = this.repository.create({name,id });
        await this.repository.save(category);
        return category;
        
    }
    async getAll(): Promise<CategoryAccessory[]>{
        const categories = await this.repository.find();
        return categories;
    }
    async getById(id: string): Promise<CategoryAccessory> {
        const category = await this.repository.findOne(id);
        return category;
    } 
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { CategoryAccessoryRepository}