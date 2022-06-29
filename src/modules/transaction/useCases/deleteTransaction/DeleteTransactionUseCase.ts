




import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";





@injectable()
class DeleteTransactionUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) { } 

    async execute(id: string): Promise<void> {

        await this.transactionRepository.delete(id);

    }
}


export { DeleteTransactionUseCase }