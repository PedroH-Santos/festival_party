import { ICreateAccessoryDTO } from "@modules/accessory/dtos/ICreateAccessoryDTO";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { inject, injectable } from "tsyringe";


 
@injectable()
class CreateAccessoryUseCase {

    constructor(
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository
    ){} 

    async execute({category_id, name , price,id}: ICreateAccessoryDTO){

        await this.accessoryRepository.create({
            category_id, name , price,id
        })

    }   
}
export { CreateAccessoryUseCase }; 