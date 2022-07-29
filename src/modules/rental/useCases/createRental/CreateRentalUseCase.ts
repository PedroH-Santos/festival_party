import { ICreateRentalDTO } from "../../dtos/ICreateRentalDTO";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/Errors/AppError";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { ICreateTransactionDTO } from "@modules/transaction/dtos/ICreateTransactionDTO";


 


@injectable()
class CreateRentalUseCase {

    constructor(
        @inject("RentalRepository")
        private rentalRepository: IRentalRepository,
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("ClientRepository") 
        private clientRepository: IClientRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository,
    ) { }

    async execute({ id, value, expected_delivery_date, product_id, user_id, description,start_date,client_id,status }: ICreateRentalDTO) {


        const user = await this.userRepository.getById(user_id);
        if (!user) {
            throw new AppError("Usuário não encontrado!");
        }

        const product = await this.productRepository.getById(product_id);

        if (!product) {
            throw new AppError("Produto não encontrado!");
        }

        const client = await this.clientRepository.getById(client_id);

        if (!client) {
            throw new AppError("Cliente não encontrado!");
        }

        const existRentalInDate = this.rentalRepository.getByDate(product_id,start_date);
        if ((await existRentalInDate).length > 0 && !id) {
            throw new AppError("Vestido já está alugado!");

        }  
        
        const rental = await this.rentalRepository.create({ id, value, expected_delivery_date, product_id, user_id, description,start_date,client_id,status });
        const transaction: ICreateTransactionDTO = {
            value: (+rental.value / 2),
            type: "deposit",
            origin: "PRIMEIRO_PAGAMENTO",
            description: "Sistema cadastrou o depósito da primeira parcela do aluguél - Metade do valor ",
            rental_id: rental.id,
        }
        await this.transactionRepository.create(transaction);

    }
}


export { CreateRentalUseCase }