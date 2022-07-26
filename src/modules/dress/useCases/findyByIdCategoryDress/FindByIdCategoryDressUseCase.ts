
import { CategoryDress } from "@modules/dress/infra/typeorm/entities/CategoryDress";
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindByIdCategoryDressUseCase {
    

    constructor(
        @inject("CategoryDressRepository")
        private categoryDressRepository: ICategoryDressRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<CategoryDress>{
        const dress = await this.categoryDressRepository.getById(id);
        if(!dress){
            throw new AppError("Categoria não encontrada",500);
        }
        return dress;
    }

}

export {FindByIdCategoryDressUseCase}