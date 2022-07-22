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

        const dress = await this.dressRepository.create({
            category_id, name , price,id
        })
        return dress;

    }   
}
export { CreateDressUseCase }; 


