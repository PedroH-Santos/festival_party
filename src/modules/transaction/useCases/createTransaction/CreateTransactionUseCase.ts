

import { inject, injectable } from "tsyringe";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { AppError } from "@shared/Errors/AppError";


const enum TypeTransaction {
    WITHDRAW = "withdraw",
    DEPOSIT = "deposit",
}


@injectable()
class CreateTransactionUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) { }

    async execute({ id, value, type, origin, description }: ICreateTransactionDTO) {
        if (type != TypeTransaction.WITHDRAW && type != TypeTransaction.DEPOSIT) {
            throw new AppError("Tipo inválido");
        }
        await this.transactionRepository.create({ id, value, type, origin, description });
    }
}


export { CreateTransactionUseCase }