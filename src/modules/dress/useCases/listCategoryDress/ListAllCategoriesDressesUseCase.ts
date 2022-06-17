import { CategoryDress } from "@modules/dress/infra/typeorm/entities/CategoryDress";
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { inject, injectable } from "tsyringe" 




  
@injectable()
class ListAllCategoriesDressesUseCase {
 
    constructor(
        @inject("CategoryDressRepository")
        private categoryDressRepository: ICategoryDressRepository
    ){}

    async execute(): Promise<CategoryDress[]>{
        const categories = await this.categoryDressRepository.getAll();
        return categories;
    } 

}

export {ListAllCategoriesDressesUseCase}