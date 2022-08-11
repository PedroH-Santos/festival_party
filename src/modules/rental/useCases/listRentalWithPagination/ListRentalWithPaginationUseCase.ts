
import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { IPaginationProvider } from "@shared/containers/providers/PaginationProvider/IPaginationProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
    start_date: Date;
    expected_delivery_date: Date;
    page: number;
}

interface IResponse {
    rentals: Rental[],
    pagination: Pagination,
}


@injectable()

class ListRentalWithPaginationUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,
        @inject("PaginationProvider")
        private paginationProvider: IPaginationProvider
    ){}
    

    async execute({start_date,expected_delivery_date,page}: IRequest): Promise<IResponse>  {
        const count = await this.rentalRepository.getCountAll(start_date,expected_delivery_date);
        const rentals = await this.rentalRepository.getWithPagination(page,start_date,expected_delivery_date);
        const pagination = this.paginationProvider.getPaginationData(count, page);
        const response: IResponse = {
            rentals,
            pagination,
        }
        return response;
    }
}

export {ListRentalWithPaginationUseCase}