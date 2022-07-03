import { Accessory } from "@modules/accessory/infra/typeorm/entities/Accessory";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { inject, injectable } from "tsyringe";





@injectable()
class ListAllAccessorysUseCase {
    

    constructor(
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository
    ){} 

    async execute(): Promise<Accessory[]>{
        const accessorys = await this.accessoryRepository.getAll();
        return accessorys;
    }

}

export {ListAllAccessorysUseCase}