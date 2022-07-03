import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteAccessoryUseCase {
    constructor(
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository
    ){} 

    async execute({ id }: IRequest):Promise<void> {
        
        await this.accessoryRepository.delete(id);
        
    }

} 


export { DeleteAccessoryUseCase }