




import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { Transaction } from "@modules/transaction/infra/typeorm/entities/Transaction";
import { IPaginationProvider } from "@shared/containers/providers/PaginationProvider/IPaginationProvider";



interface IRequest {
    page: number;
    search: string;
}
interface IResponse {
    transactions: Transaction[],
    pagination: Pagination,
}

@injectable()
class ListTransactionWithPaginationUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
        @inject("PaginationProvider")
        private paginationProvider: IPaginationProvider
    ) { } 

    async execute({page,search}: IRequest): Promise<IResponse> {
        const count = await this.transactionRepository.getCountAll(search);
        const transactions = await this.transactionRepository.getWithPagination(page,search);
        const pagination = this.paginationProvider.getPaginationData(count, page);
        const response: IResponse = {
            transactions,
            pagination,
        }
        return response;
    }
}


export { ListTransactionWithPaginationUseCase }