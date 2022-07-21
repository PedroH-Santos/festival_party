import { Dress } from "@modules/dress/infra/typeorm/entities/Dress";
import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindDressByIdUseCase {
    

    constructor(
        @inject("DressRepository")
        private dressRepository: IDressRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<Dress>{
        const dress = await this.dressRepository.getById(id);
        if(!dress){
            throw new AppError("Vestido não encontrado",500);
        }
        return dress;
    }

}

export {FindDressByIdUseCase}