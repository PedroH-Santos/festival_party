import { ICategoryProductRepository } from "@modules/product/repositories/ICategoryProductRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteCategoryProductUseCase {

    constructor(
        @inject("CategoryProductRepository")
        private categoryProductRepository: ICategoryProductRepository
    ){} 

    async execute({id}: IRequest): Promise<void> {
        await this.categoryProductRepository.delete(id);
    }
}


export { DeleteCategoryProductUseCase }