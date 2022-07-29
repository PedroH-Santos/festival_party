
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"

import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";


interface FiltersRequest {
    id: string;
}


@injectable()
class FindRentalByIdUseCase {
    

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,
    ){} 

    async execute({id}: FiltersRequest): Promise<Rental>{
        const rental = await this.rentalRepository.getById(id);
        if(!rental){
            throw new AppError("Aluguél não encontrado",500);
        }
        return rental;
    }

}

export {FindRentalByIdUseCase}