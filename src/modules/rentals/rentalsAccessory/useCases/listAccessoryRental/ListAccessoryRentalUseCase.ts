import { AccessoryRental } from "@modules/rentals/rentalsAccessory/infra/typeorm/entities/AccessoryRental";
import { IAccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/repositories/IAccessoryRentalRepository";
import { inject, injectable } from "tsyringe";




@injectable()

class ListAccessoryRentalUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository
    ){}
    

    async execute(): Promise<AccessoryRental[]>  {
        const rentals = this.accessoryRentalRepository.getAll();
        return rentals;
    }
}

export {ListAccessoryRentalUseCase}