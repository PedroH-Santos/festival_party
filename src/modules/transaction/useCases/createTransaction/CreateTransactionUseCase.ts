

import { IDressRentalRepository } from "../../repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/Errors/AppError";


 


@injectable()
class CreateTransactionUseCase {

    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) { }

    async execute({ id,value, type, origin}: ICreateTransactionDTO) {

        await this.transactionRepository.create({  id,value, type, origin});

    }
}


export { CreateTransactionUseCase }