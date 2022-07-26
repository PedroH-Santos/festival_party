
import { CategoryAccessory } from "@modules/accessory/infra/typeorm/entities/CategoryAccessory";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { ICategoryAccessoryRepository } from "@modules/accessory/repositories/ICategoryAccessoryRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindByIdCategoryAccessoryUseCase {
    

    constructor(
        @inject("CategoryAccessoryRepository")
        private categoryAccessoryRepository: ICategoryAccessoryRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<CategoryAccessory>{
        const accessory = await this.categoryAccessoryRepository.getById(id);
        if(!accessory){
            throw new AppError("Categoria não encontrada",500);
        }
        return accessory;
    }

}

export {FindByIdCategoryAccessoryUseCase}