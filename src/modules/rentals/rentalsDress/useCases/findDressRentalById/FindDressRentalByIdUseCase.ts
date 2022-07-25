
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"
import { DressRental } from "../../infra/typeorm/entities/DressRental";
import { IDressRentalRepository } from "../../repositories/IDressRentalRepository";


interface FiltersRequest {
    id: string;
}


@injectable()
class FindDressRentalByIdUseCase {
    

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,
    ){} 

    async execute({id}: FiltersRequest): Promise<DressRental>{
        const rental = await this.dressRentalRepository.getById(id);
        if(!rental){
            throw new AppError("Aluguél não encontrado",500);
        }
        return rental;
    }

}

export {FindDressRentalByIdUseCase}