
import { inject, injectable } from "tsyringe";
import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";





@injectable()

class ListRentalFinishTodayUseCase {

    constructor(
        @inject("RentalRepository")
        private RentalRepository: IRentalRepository
    ){}
    

    async execute(): Promise<Rental[]>  {
        const rentals = this.RentalRepository.getAllFinishToday();
        return rentals;
    }
}
 
export {ListRentalFinishTodayUseCase}