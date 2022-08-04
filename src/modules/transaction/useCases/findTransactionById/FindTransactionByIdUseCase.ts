
import { Transaction } from "@modules/transaction/infra/typeorm/entities/Transaction";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindTransactionByIdUseCase {
    

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<Transaction>{
        const transaction = await this.transactionRepository.getById(id);
        if(!transaction){
            throw new AppError("Transação não encontrado");
        }
        return transaction;
    }

}

export {FindTransactionByIdUseCase}