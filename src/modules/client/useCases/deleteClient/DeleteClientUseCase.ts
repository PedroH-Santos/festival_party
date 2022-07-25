import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
}

@injectable()
class DeleteClientUseCase {

    constructor(
        @inject("ClientRepository") 
        private clientRepository: IClientRepository
    ){}

    async execute({id}: IRequest): Promise<void>{
        await this.clientRepository.delete(id);
    }
}


export {DeleteClientUseCase}