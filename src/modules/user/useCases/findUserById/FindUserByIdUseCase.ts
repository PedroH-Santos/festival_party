
import { User } from "@modules/user/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindUserByIdUseCase {
    

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<User>{
        const user = await this.userRepository.getById(id);
        if(!user){
            throw new AppError("Usuário não encontrado",500);
        }
        return user;
    }

}

export {FindUserByIdUseCase}