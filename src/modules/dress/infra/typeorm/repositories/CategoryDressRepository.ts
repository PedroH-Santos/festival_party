import { ICreateCategoryDressDTO } from "@modules/dress/dtos/ICreateCategoryDressDTO";
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { getRepository, Repository } from "typeorm";
import { CategoryDress } from "../entities/CategoryDress";



class CategoryDressRepository implements ICategoryDressRepository{
    private repository: Repository<CategoryDress>;
    constructor(){
        this.repository = getRepository(CategoryDress);
    }

    async create({name }: ICreateCategoryDressDTO): Promise<CategoryDress> {
        const dress = this.repository.create({name });
        await this.repository.save(dress);
        return dress;
        
    }
}


export { CategoryDressRepository}