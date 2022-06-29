




import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { Transaction } from "@modules/transaction/infra/typeorm/entities/Transaction";





@injectable()
class ListTransactionUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) { } 

    async execute(): Promise<Transaction[]> {

        const transactions = await this.transactionRepository.getAll();
        return transactions;
    }
}


export { ListTransactionUseCase }