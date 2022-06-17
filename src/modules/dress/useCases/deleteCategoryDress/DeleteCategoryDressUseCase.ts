import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteCategoryDressUseCase {

    constructor(
        @inject("CategoryDressRepository")
        private categoryDressRepository: ICategoryDressRepository
    ){} 

    async execute({id}: IRequest): Promise<void> {
        await this.categoryDressRepository.delete(id);
    }
}


export { DeleteCategoryDressUseCase }