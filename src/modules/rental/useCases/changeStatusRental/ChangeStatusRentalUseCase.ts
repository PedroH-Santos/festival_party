
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { ICreateTransactionDTO } from "@modules/transaction/dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { IDateProvider } from "@shared/containers/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    status: string;
}

@injectable()
class ChangeStatusRentalUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,

    ) { }

    async execute({ id, status }: IRequest): Promise<void> {



        const rental = await this.rentalRepository.getById(id);
        if (!rental) {
            throw new AppError("Aluguel não encontrado !");
        }



        rental.status = status;
        await this.rentalRepository.create(rental);

        if (status == "CLOSE") {
            rental.end_date = this.dateProvider.dateNow();
            await this.rentalRepository.updateFinish(rental.id, rental.end_date);
            const transaction: ICreateTransactionDTO = {
                value: (+rental.value / 2),
                type: "deposit",
                origin: "SEGUNDO_PAGAMENTO",
                description: "Sistema finalizou um aluguél e  cadastrou o depósito da segunda parcela do aluguél - Metade do valor",
                rental_id: rental.id,
            }
            await this.transactionRepository.create(transaction);

        }

    }
}


export { ChangeStatusRentalUseCase }