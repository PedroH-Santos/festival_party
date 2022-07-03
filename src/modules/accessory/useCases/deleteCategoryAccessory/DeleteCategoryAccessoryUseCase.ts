import { inject, injectable } from "tsyringe";
import { ICategoryAccessoryRepository } from "@modules/accessory/repositories/ICategoryAccessoryRepository"; 

interface IRequest {
    id: string;
} 

@injectable()
class DeleteCategoryAccessoryUseCase { 

    constructor(
        @inject("CategoryAccessoryRepository")
        private categoryAccessoryRepository: ICategoryAccessoryRepository
    ){} 

    async execute({id}: IRequest): Promise<void> {
        await this.categoryAccessoryRepository.delete(id);
    }
}


export { DeleteCategoryAccessoryUseCase }