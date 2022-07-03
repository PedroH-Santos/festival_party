
import { CategoryAccessory } from "@modules/accessory/infra/typeorm/entities/CategoryAccessory";
import { ICategoryAccessoryRepository } from "@modules/accessory/repositories/ICategoryAccessoryRepository";
import { inject, injectable } from "tsyringe" 




  
@injectable()
class ListAllCategoriesAccessorysUseCase {
 
    constructor(
        @inject("CategoryAccessoryRepository")
        private categoryAccessoryRepository: ICategoryAccessoryRepository
    ){}

    async execute(): Promise<CategoryAccessory[]>{
        const categories = await this.categoryAccessoryRepository.getAll();
        return categories;
    } 

}

export {ListAllCategoriesAccessorysUseCase}