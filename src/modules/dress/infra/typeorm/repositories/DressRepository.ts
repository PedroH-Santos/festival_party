
import { ICreateDressDTO } from "@modules/dress/dtos/ICreateDressDTO";
import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { getRepository, Repository } from "typeorm";
import { Dress } from "../entities/Dress";



class DressRepository implements IDressRepository{
    private repository: Repository<Dress>; 
    constructor(){
        this.repository = getRepository(Dress);
    }



    async create({category_id, name , price,id}: ICreateDressDTO): Promise<Dress> {
        const dress = this.repository.create({category_id, name , price,id});
        await this.repository.save(dress);
        return dress;
        
    }

    async getAll(): Promise<Dress[]>{
        const dresses = await this.repository.find({
            relations: ["category","images"]
        });
        return dresses;
    }
    async getById(id: string): Promise<Dress> {
        const dress = await this.repository.findOne(id,{
            relations: ["category","images"]

        });
        return dress;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { DressRepository}