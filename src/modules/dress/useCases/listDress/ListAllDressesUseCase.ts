import { Dress } from "@modules/dress/infra/typeorm/entities/Dress";
import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe"





@injectable()
class ListAllDressesUseCase {
    

    constructor(
        @inject("DressRepository")
        private dressRepository: IDressRepository
    ){} 

    async execute(): Promise<Dress[]>{
        const dresses = await this.dressRepository.getAll();
        return dresses;
    }

}

export {ListAllDressesUseCase}