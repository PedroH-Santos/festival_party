import { ICreateCategoryProductDTO } from "@modules/Product/dtos/ICreateCategoryProductDTO";
import { ICategoryProductRepository } from "@modules/Product/repositories/ICategoryProductRepository";
import { inject, injectable } from "tsyringe";




@injectable()
class CreateCategoryProductUseCase {

    constructor(
        @inject("CategoryProductRepository")
        private categoryProductRepository: ICategoryProductRepository
    ){}

    async execute({name,id}: ICreateCategoryProductDTO){

        await this.categoryProductRepository.create({name,id});

    }   
}
export { CreateCategoryProductUseCase }; 