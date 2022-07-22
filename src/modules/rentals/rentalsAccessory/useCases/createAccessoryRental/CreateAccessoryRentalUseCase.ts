import { ICreateAccessoryRentalDTO } from "../../dtos/ICreateAccessoryRentalDTO";
import { IUserRepository } from "../../../../user/repositories/IUserRepository";

import { IAccessoryRentalRepository } from "../../repositories/IAccessoryRentalRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/Errors/AppError";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";


 


@injectable()
class CreateAccessoryRentalUseCase {

    constructor(
        @inject("AccessoryRentalRepository")
        private accessoryRentalRepository: IAccessoryRentalRepository,
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) { }

    async execute({ id, value, expected_delivery_date, accessory_id, user_id, description,start_date }: ICreateAccessoryRentalDTO) {



        const user = await this.userRepository.getById(user_id);
        if (!user) {
            throw new AppError("Usuário não encontrado!");
        }

        const accessory = await this.accessoryRepository.getById(accessory_id);

        if (!accessory) {
            throw new AppError("Accessório não encontrado!");
        }


        const existRentalInDate = this.accessoryRentalRepository.getByDate(accessory_id,start_date);
        if ((await existRentalInDate).length > 0) {
            throw new AppError("Accessório já está alugado!");

        }  


        await this.accessoryRentalRepository.create({ id, value, expected_delivery_date, accessory_id, user_id, description,start_date });

    }
}


export { CreateAccessoryRentalUseCase }