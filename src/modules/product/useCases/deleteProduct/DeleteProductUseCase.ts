import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ){} 

    async execute({ id }: IRequest):Promise<void> {
        
        await this.productRepository.delete(id);
        
    }

}


export { DeleteProductUseCase }