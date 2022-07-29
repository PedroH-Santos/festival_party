import { CategoryProduct } from "@modules/Product/infra/typeorm/entities/CategoryProduct";
import { ICategoryProductRepository } from "@modules/Product/repositories/ICategoryProductRepository";
import { inject, injectable } from "tsyringe" 




  
@injectable()
class ListAllCategoriesProductsUseCase {
 
    constructor(
        @inject("CategoryProductRepository")
        private categoryProductRepository: ICategoryProductRepository
    ){}

    async execute(): Promise<CategoryProduct[]>{
        const categories = await this.categoryProductRepository.getAll();
        return categories;
    } 

}

export {ListAllCategoriesProductsUseCase}