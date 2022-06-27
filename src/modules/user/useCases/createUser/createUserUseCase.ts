import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@modules/user/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository") 
        private userRepository: IUserRepository
    ){}
    

    async execute({id,name,email}: ICreateUserDTO): Promise<User> {
        const user = await this.userRepository.create({id,name,email});
        return user;
    }
}


export {CreateUserUseCase}