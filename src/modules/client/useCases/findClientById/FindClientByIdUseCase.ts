
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe"


interface FiltersRequest {
    id: string;
}


@injectable()
class FindClientByIdUseCase {
    

    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ){} 

    async execute({id}: FiltersRequest): Promise<Client>{
        const client = await this.clientRepository.getById(id);
        if(!client){
            throw new AppError("Cliente não encontrado",500);
        }
        return client;
    }

}

export {FindClientByIdUseCase}