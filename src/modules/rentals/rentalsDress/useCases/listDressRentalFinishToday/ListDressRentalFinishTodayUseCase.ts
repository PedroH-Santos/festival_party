
import { inject, injectable } from "tsyringe";
import { DressRental } from "../../infra/typeorm/entities/DressRental";
import { IDressRentalRepository } from "../../repositories/IDressRentalRepository";





@injectable()

class ListDressRentalFinishTodayUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository
    ){}
    

    async execute(): Promise<DressRental[]>  {
        const rentals = this.dressRentalRepository.getAllFinishToday();
        return rentals;
    }
}
 
export {ListDressRentalFinishTodayUseCase}