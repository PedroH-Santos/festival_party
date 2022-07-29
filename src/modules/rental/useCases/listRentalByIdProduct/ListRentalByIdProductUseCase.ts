
import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    product_id: string;
}

@injectable()

class ListRentalByIdProductUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository
    ){}
    

    async execute({product_id}: IRequest): Promise<Rental[]>  {
        const rentals = this.rentalRepository.getByProductId(product_id);
        return rentals;
    }
}

export {ListRentalByIdProductUseCase}