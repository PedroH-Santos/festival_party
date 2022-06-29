import { IDressRentalRepository } from "@modules/rentals/repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,

    ) { }

    async execute(id: string): Promise<void>{

        await this.dressRentalRepository.delete(id);

    }
}


export { DeleteDressRentalUseCase }