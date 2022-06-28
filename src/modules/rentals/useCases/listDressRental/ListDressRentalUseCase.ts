import { DressRental } from "@modules/rentals/infra/typeorm/entities/DressRental";
import { IDressRentalRepository } from "@modules/rentals/repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";




@injectable()

class ListDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository
    ){}
    

    async execute(): Promise<DressRental[]>  {
        const rentals = this.dressRentalRepository.getAll();
        return rentals;
    }
}

export {ListDressRentalUseCase}