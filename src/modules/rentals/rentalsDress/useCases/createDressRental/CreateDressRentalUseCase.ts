import { ICreateDressRentalDTO } from "../../dtos/ICreateDressRentalDTO";
import { IDressRepository } from "../../../../dress/repositories/IDressRepository";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

import { IDressRentalRepository } from "../../repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/Errors/AppError";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";


 


@injectable()
class CreateDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,
        @inject("DressRepository")
        private dressRepository: IDressRepository,
        @inject("ClientRepository") 
        private clientRepository: IClientRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) { }

    async execute({ id, value, expected_delivery_date, dress_id, user_id, description,start_date,client_id }: ICreateDressRentalDTO) {


        const user = await this.userRepository.getById(user_id);
        if (!user) {
            throw new AppError("Usuário não encontrado!");
        }

        const dress = await this.dressRepository.getById(dress_id);

        if (!dress) {
            throw new AppError("Vestido não encontrado!");
        }

        const client = await this.clientRepository.getById(client_id);

        if (!client) {
            throw new AppError("Cliente não encontrado!");
        }

        const existRentalInDate = this.dressRentalRepository.getByDate(dress_id,start_date);
        if ((await existRentalInDate).length > 0) {
            throw new AppError("Vestido já está alugado!");

        }  


        await this.dressRentalRepository.create({ id, value, expected_delivery_date, dress_id, user_id, description,start_date,client_id });

    }
}


export { CreateDressRentalUseCase }