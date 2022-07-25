import { ICreateClientDTO } from "@modules/client/dtos/ICreateClientDTO";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { Repository, getRepository } from "typeorm"; 

import { Client } from "../entities/Client";




class ClientRepository implements IClientRepository {
    private repository: Repository<Client>
    constructor(){
        this.repository = getRepository(Client);
    }

    
    async create({ id, name, email,phone }: ICreateClientDTO): Promise<Client> {
        const client = this.repository.create({ id, name, email,phone});    
        await this.repository.save(client);
        return client;

    }
    async getAll(): Promise<Client[]> {
        const client = await this.repository.find();
        return client;
    }
    async getById(id: string): Promise<Client> {
        const client = await this.repository.findOne(id);
        return client;
    } 

    async getByEmail(email: string): Promise<Client> {
        const client = await this.repository.findOne({
            where: {email}
        });
        return client;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}


export {ClientRepository}