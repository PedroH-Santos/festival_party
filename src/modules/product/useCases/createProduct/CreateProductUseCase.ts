import { ICreateProductDTO } from "@modules/Product/dtos/ICreateProductDTO";
import { IProductRepository } from "@modules/Product/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";




@injectable()
class CreateProductUseCase {

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){} 

    async execute({category_id, name , price,id}: ICreateProductDTO){

        const product = await this.productRepository.create({
            category_id, name , price,id
        })
        return product;

    }   
}
export { CreateProductUseCase }; 


