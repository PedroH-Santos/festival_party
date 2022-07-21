import { DressRental } from "@modules/rentals/rentalsDress/infra/typeorm/entities/DressRental";
import { IDressRentalRepository } from "@modules/rentals/rentalsDress/repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    dress_id: string;
}

@injectable()

class ListDressRentalByIdDressUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository
    ){}
    

    async execute({dress_id}: IRequest): Promise<DressRental[]>  {
        const rentals = this.dressRentalRepository.getByDressId(dress_id);
        return rentals;
    }
}

export {ListDressRentalByIdDressUseCase}