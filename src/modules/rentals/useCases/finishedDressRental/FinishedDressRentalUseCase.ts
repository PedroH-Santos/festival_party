import { IDressRentalRepository } from "@modules/rentals/repositories/IDressRentalRepository";
import { ICreateTransactionDTO } from "@modules/transaction/dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { IDateProvider } from "../../../../shared/containers/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FinishedDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,

    ) { }

    async execute(id: string): Promise<void>{



        const rental = await this.dressRentalRepository.getById(id);
        if(!rental){ 
            throw new AppError("Aluguel não encontrado !");
        }

        const transaction: ICreateTransactionDTO = {
            value: rental.value,
            type: "deposit",
            origin: "RENTAL_DRESS",
            description: "Sistema finalizou um aluguél e cadastrou o depósito do valor"
        }
        await this.transactionRepository.create(transaction);


        
        const end_date = this.dateProvider.dateNow();

        await this.dressRentalRepository.updateFinish(id,end_date);

    }
}


export { FinishedDressRentalUseCase }