import { getRepository, Repository } from "typeorm";
import { ICreateImageAccessoryDTO } from "../../../dtos/ICreateImageAccessoryDTO";
import { IImageAccessoryRepository } from "../../../repositories/IImageAccessoryRepository";
import { ImageAccessory } from "../entities/ImageAccessory";


class ImageAccessoryRepository implements IImageAccessoryRepository {
    private repository: Repository<ImageAccessory>;
    constructor() {
        this.repository = getRepository(ImageAccessory);
    }
    getByIdAccessory(accessory_id: string): Promise<ImageAccessory> {
        const imagesAccessory = this.repository.findOne({
            where: { accessory_id }
        });
        return imagesAccessory;
    }

    async create({ image, accessory_id }: ICreateImageAccessoryDTO): Promise<ImageAccessory> {
        const imageAccessory = this.repository.create({ image, accessory_id });
        await this.repository.save(imageAccessory);
        return imageAccessory;

    }
    async getAll(): Promise<ImageAccessory[]> {
        const imageAccessory = this.repository.find();
        return imageAccessory;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }


}

export { ImageAccessoryRepository }