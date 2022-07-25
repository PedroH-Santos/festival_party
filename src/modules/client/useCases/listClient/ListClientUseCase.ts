
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListClientUseCase {
    constructor(
        @inject("ClientRepository") 
        private clientRepository: IClientRepository
    ){} 
    async execute(): Promise<Client[]>{
        const clients =  await this.clientRepository.getAll();
        return clients;
    } 
} 
 

export { ListClientUseCase }