import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";
import { ICreateDressDTO } from "../../dtos/ICreateDressDTO";




@injectable()
class CreateDressUseCase {

    constructor(
        @inject("DressRepository")
        private dressRepository: IDressRepository
    ){} 

    async execute({categoryId, name , price,id}: ICreateDressDTO){

        await this.dressRepository.create({
            categoryId, name , price,id
        })

    }   
}
export { CreateDressUseCase }; 