
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteRentalUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,

    ) { }

    async execute(id: string): Promise<void>{

        await this.rentalRepository.delete(id);

    }
}


export { DeleteRentalUseCase }