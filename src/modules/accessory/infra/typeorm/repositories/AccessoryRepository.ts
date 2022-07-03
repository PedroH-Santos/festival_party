
import { getRepository, Repository } from "typeorm";
import { ICreateAccessoryDTO } from "../../../dtos/ICreateAccessoryDTO";
import { IAccessoryRepository } from "../../../repositories/IAccessoryRepository";
import { Accessory } from "../entities/Accessory";



class AccessoryRepository implements IAccessoryRepository{
    private repository: Repository<Accessory>;
    constructor(){
        this.repository = getRepository(Accessory);
    }



    async create({category_id, name , price,id}: ICreateAccessoryDTO): Promise<Accessory> {
        const accessory = this.repository.create({category_id, name , price,id});
        await this.repository.save(accessory);
        return accessory;
        
    }

    async getAll(): Promise<Accessory[]>{
        const accessorys = await this.repository.find();
        return accessorys;
    }
    async getById(id: string): Promise<Accessory> {
        const accessory = await this.repository.findOne(id);
        return accessory;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { AccessoryRepository}