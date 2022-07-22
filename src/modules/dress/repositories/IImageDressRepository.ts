import { ICreateImageDressDTO } from "../dtos/ICreateImageDressDTO";
import { ImageDress } from "../infra/typeorm/entities/ImageDress";

interface IImageDressRepository {
    create({image,dress_id}: ICreateImageDressDTO): Promise<ImageDress>;
    getAll(): Promise<ImageDress[]>;
    getByIdDress(dress_id: string): Promise<ImageDress>;
    delete(id: string): Promise<void>;
}

export {IImageDressRepository}