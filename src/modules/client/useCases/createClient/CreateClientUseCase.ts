
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { ICreateClientDTO } from "@modules/client/dtos/ICreateClientDTO";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }


    async execute({ id, name, email, phone }: ICreateClientDTO): Promise<Client> {

        const client = await this.clientRepository.create({ id, name, email, phone });
        return client;
    }
}


export { CreateClientUseCase }