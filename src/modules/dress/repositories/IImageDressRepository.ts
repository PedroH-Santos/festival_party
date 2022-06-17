import { ICreateImageDressDTO } from "../dtos/ICreateImageDressDTO";
import { ImageDress } from "../infra/typeorm/entities/ImageDress";

interface IImageDressRepository {
    create({image,idDress}: ICreateImageDressDTO): Promise<ImageDress>;
    getAll(): Promise<ImageDress[]>;
    delete(id: string): Promise<void>;
}

export {IImageDressRepository}