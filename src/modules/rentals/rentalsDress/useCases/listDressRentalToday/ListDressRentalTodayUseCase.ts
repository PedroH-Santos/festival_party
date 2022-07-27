import { DressRental } from "@modules/rentals/rentalsDress/infra/typeorm/entities/DressRental";
import { IDressRentalRepository } from "@modules/rentals/rentalsDress/repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";




@injectable()

class ListDressRentalTodayUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository
    ){}
    

    async execute(): Promise<DressRental[]>  {
        const rentals = this.dressRentalRepository.getAllToday();
        return rentals;
    }
}

export {ListDressRentalTodayUseCase}