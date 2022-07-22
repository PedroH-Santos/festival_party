import { IAccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/repositories/IAccessoryRentalRepository";
import { ICreateTransactionDTO } from "@modules/transaction/dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { IDateProvider } from "@shared/containers/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FinishedAccessoryRentalUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository,
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,

    ) { }

    async execute(id: string): Promise<void>{



        const rental = await this.accessoryRentalRepository.getById(id);
        if(!rental){ 
            throw new AppError("Aluguel não encontrado !");
        }

        const transaction: ICreateTransactionDTO = {
            value: rental.value,
            type: "deposit",
            origin: "RENTAL_ACCESSORY",
            description: "Sistema finalizou um aluguél e cadastrou o depósito do valor"
        }
        await this.transactionRepository.create(transaction);


        
        const end_date = this.dateProvider.dateNow();

        await this.accessoryRentalRepository.updateFinish(id,end_date);

    }
}


export { FinishedAccessoryRentalUseCase }