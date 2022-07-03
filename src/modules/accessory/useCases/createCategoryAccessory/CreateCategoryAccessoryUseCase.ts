import { inject, injectable } from "tsyringe";
import { ICategoryAccessoryRepository } from "@modules/accessory/repositories/ICategoryAccessoryRepository"; 
import { ICreateCategoryAccessoryDTO } from "@modules/accessory/dtos/ICreateCategoryAccessoryDTO";




@injectable()
class CreateCategoryAccessoryUseCase {
 
    constructor(
        @inject("CategoryAccessoryRepository")
        private categoryAccessoryRepository: ICategoryAccessoryRepository
    ){}

    async execute({name,id}: ICreateCategoryAccessoryDTO){

        await this.categoryAccessoryRepository.create({name,id});

    }   
}
export { CreateCategoryAccessoryUseCase }; 