import { User } from "@modules/user/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUserUseCase {
    constructor(
        @inject("UserRepository") 
        private userRepository: IUserRepository
    ){} 
    async execute(): Promise<User[]>{
        const users =  await this.userRepository.getAll();
        return users;
    } 
} 
 

export { ListUserUseCase }