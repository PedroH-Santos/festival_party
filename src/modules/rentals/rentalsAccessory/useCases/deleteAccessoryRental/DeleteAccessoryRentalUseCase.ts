import { IAccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/repositories/IAccessoryRentalRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteAccessoryRentalUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository,

    ) { }

    async execute(id: string): Promise<void>{

        await this.accessoryRentalRepository.delete(id);

    }
}


export { DeleteAccessoryRentalUseCase }