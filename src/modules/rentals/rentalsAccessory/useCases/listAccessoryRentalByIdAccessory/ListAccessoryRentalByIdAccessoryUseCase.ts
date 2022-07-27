import { AccessoryRental } from "@modules/rentals/rentalsAccessory/infra/typeorm/entities/AccessoryRental";
import { IAccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/repositories/IAccessoryRentalRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    accessory_id: string;
}

@injectable()

class ListAccessoryRentalByIdAccessoryUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository
    ){}
    

    async execute({accessory_id}: IRequest): Promise<AccessoryRental[]>  {
        const rentals = this.accessoryRentalRepository.getByAccessoryId(accessory_id);
        return rentals;
    }
}

export {ListAccessoryRentalByIdAccessoryUseCase}