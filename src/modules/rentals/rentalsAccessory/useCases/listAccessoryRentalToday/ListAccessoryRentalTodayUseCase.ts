
import { inject, injectable } from "tsyringe";
import { AccessoryRental } from "../../infra/typeorm/entities/AccessoryRental";
import { IAccessoryRentalRepository } from "../../repositories/IAccessoryRentalRepository";




@injectable()

class ListAccessoryRentalTodayUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository
    ){}
    

    async execute(): Promise<AccessoryRental[]>  {
        const rentals = this.accessoryRentalRepository.getAllToday();
        return rentals;
    }
}
 
export {ListAccessoryRentalTodayUseCase}