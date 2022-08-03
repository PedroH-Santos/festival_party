
import { Product } from "@modules/product/infra/typeorm/entities/Product";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { inject, injectable } from "tsyringe"





@injectable()
class ListAllProductsUseCase {
    

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){} 

    async execute(): Promise<Product[]>{
        const products = await this.productRepository.getAll();
        return products;
    }

}

export {ListAllProductsUseCase}