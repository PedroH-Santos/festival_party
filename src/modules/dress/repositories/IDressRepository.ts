import { ICreateDressDTO } from "../dtos/ICreateDressDTO";
import { Dress } from "../infra/typeorm/entities/Dress";



interface IDressRepository {
    create({categoryId, name , price}: ICreateDressDTO): Promise<Dress>;
}

export {IDressRepository}