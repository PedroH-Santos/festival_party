import { ICreateImageAccessoryDTO } from "../dtos/ICreateImageAccessoryDTO";
import { ImageAccessory } from "../infra/typeorm/entities/ImageAccessory";

interface IImageAccessoryRepository {
    create({image,accessory_id}: ICreateImageAccessoryDTO): Promise<ImageAccessory>;
    getAll(): Promise<ImageAccessory[]>;
    delete(id: string): Promise<void>;
}

export {IImageAccessoryRepository}