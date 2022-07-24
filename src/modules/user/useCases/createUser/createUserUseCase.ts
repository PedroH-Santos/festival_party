import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@modules/user/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository") 
        private userRepository: IUserRepository
    ){}
    

    async execute({id,name,email,password}: ICreateUserDTO): Promise<User> {
        const passwordHash = await hash(password,8);

        const user = await this.userRepository.create({id,name,email,password:passwordHash});
        return user;
    }
}


export {CreateUserUseCase}