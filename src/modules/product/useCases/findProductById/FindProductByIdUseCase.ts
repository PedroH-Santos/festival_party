import { Product } from "@modules/product/infra/typeorm/entities/Product";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindProductByIdUseCase {
    

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<Product>{
        const product = await this.productRepository.getById(id);
        if(!product){
            throw new AppError("Vestido não encontrado",500);
        }
        return product;
    }

}

export {FindProductByIdUseCase}