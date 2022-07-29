
import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { inject, injectable } from "tsyringe";




@injectable()

class ListRentalTodayUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository
    ){}
    

    async execute(): Promise<Rental[]>  {
        const rentals = this.rentalRepository.getAllToday();
        return rentals;
    }
}

export {ListRentalTodayUseCase}