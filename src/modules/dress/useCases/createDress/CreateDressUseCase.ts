import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";
import { ICreateDressDTO } from "../../dtos/ICreateDressDTO";




@injectable()
class CreateDressUseCase {

    constructor(
        @inject("DressRepository")
        private dressRepository: IDressRepository
    ){} 

    async execute({category_id, name , price,id}: ICreateDressDTO){

        await this.dressRepository.create({
            category_id, name , price,id
        })

    }   
}
export { CreateDressUseCase }; 