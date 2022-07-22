import { Accessory } from "@modules/accessory/infra/typeorm/entities/Accessory";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindAccessoryByIdUseCase {
    

    constructor(
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<Accessory>{
        const accessory = await this.accessoryRepository.getById(id);
        if(!accessory){
            throw new AppError("Vestido não encontrado",500);
        }
        return accessory;
    }

}

export {FindAccessoryByIdUseCase}