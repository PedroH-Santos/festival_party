import { ICreateCategoryDressDTO } from "@modules/dress/dtos/ICreateCategoryDressDTO";
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { inject, injectable } from "tsyringe";




@injectable()
class CreateCategoryDressUseCase {

    constructor(
        @inject("CategoryDressRepository")
        private categoryDressRepository: ICategoryDressRepository
    ){}

    async execute({name,id}: ICreateCategoryDressDTO){

        await this.categoryDressRepository.create({name,id});

    }   
}
export { CreateCategoryDressUseCase }; 