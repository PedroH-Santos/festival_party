
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"
import { AccessoryRental } from "../../infra/typeorm/entities/AccessoryRental";
import { IAccessoryRentalRepository } from "../../repositories/IAccessoryRentalRepository";



interface FiltersRequest {
    id: string;
}


@injectable()
class FindAccessoryRentalByIdUseCase {
    

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<AccessoryRental>{
        const rental = await this.accessoryRentalRepository.getById(id);
        if(!rental){
            throw new AppError("Aluguél não encontrado",500);
        }
        return rental;
    }

}

export {FindAccessoryRentalByIdUseCase}