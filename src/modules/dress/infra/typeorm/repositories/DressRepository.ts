
import { ICreateDressDTO } from "@modules/dress/dtos/ICreateDressDTO";
import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { getRepository, Repository } from "typeorm";
import { Dress } from "../entities/Dress";



class DressRepository implements IDressRepository{
    private repository: Repository<Dress>;
    constructor(){
        this.repository = getRepository(Dress);
    }

    async create({categoryId, name , price}: ICreateDressDTO): Promise<Dress> {
        const dress = this.repository.create({categoryId, name , price});
        await this.repository.save(dress);
        return dress;
        
    }
}


export { DressRepository}