
import { CategoryProduct } from "@modules/Product/infra/typeorm/entities/CategoryProduct";
import { ICategoryProductRepository } from "@modules/Product/repositories/ICategoryProductRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindByIdCategoryProductUseCase {
    

    constructor(
        @inject("CategoryProductRepository")
        private categoryProductRepository: ICategoryProductRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<CategoryProduct>{
        const category = await this.categoryProductRepository.getById(id);
        if(!category){
            throw new AppError("Categoria não encontrada",500);
        }
        return category;
    }

}

export {FindByIdCategoryProductUseCase}