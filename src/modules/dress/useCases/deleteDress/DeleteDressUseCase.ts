import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteDressUseCase {
    constructor(
        @inject("DressRepository")
        private dressRepository: IDressRepository
    ){} 

    async execute({ id }: IRequest):Promise<void> {
        
        await this.dressRepository.delete(id);
        
    }

}


export { DeleteDressUseCase }