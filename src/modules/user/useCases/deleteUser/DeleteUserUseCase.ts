import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
}

@injectable()
class DeleteUserUseCase {

    constructor(
        @inject("UserRepository") 
        private userRepository: IUserRepository
    ){}

    async execute({id}: IRequest): Promise<void>{
        await this.userRepository.delete(id);
    }
}


export {DeleteUserUseCase}