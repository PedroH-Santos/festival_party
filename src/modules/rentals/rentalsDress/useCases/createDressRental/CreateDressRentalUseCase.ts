import { ICreateDressRentalDTO } from "../../dtos/ICreateDressRentalDTO";
import { IDressRepository } from "../../../../dress/repositories/IDressRepository";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

import { IDressRentalRepository } from "../../repositories/IDressRentalRepository";
import { inject, injectable } from "tsyringe";


 


@injectable()
class CreateDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,
        @inject("DressRepository")
        private dressRepository: IDressRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) { }

    async execute({ id, value, expected_delivery_date, dress_id, user_id, description,start_date }: ICreateDressRentalDTO) {



        const user = await this.userRepository.getById(user_id);
        if (!user) {
            throw new AppError("Usuário não encontrado!");
        }

        const dress = await this.dressRepository.getById(dress_id);

        if (!dress) {
            throw new AppError("Vestido não encontrado!");
        }


        const existRentalInDate = this.dressRentalRepository.getByDate(dress_id);
        if ((await existRentalInDate).length > 0) {
            throw new AppError("Vestido já está alugado!");

        } 


        await this.dressRentalRepository.create({ id, value, expected_delivery_date, dress_id, user_id, description,start_date });

    }
}


export { CreateDressRentalUseCase }