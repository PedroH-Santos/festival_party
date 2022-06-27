import { getRepository, Repository } from "typeorm";
import { ImageDress } from "../entities/ImageDress";
import {IImageDressRepository} from "../../../repositories/IImageDressRepository";
import { ICreateImageDressDTO } from "../../../dtos/ICreateImageDressDTO";

class ImageDressRepository implements IImageDressRepository {
    private repository: Repository<ImageDress>;
    constructor(){
        this.repository = getRepository(ImageDress);
    }

    async create({ image, dress_id }: ICreateImageDressDTO): Promise<ImageDress> {
       const imageDress = this.repository.create({image,dress_id});
       await this.repository.save(imageDress);
       return imageDress;

    }
    async getAll(): Promise<ImageDress[]> {
        const imagesDress = this.repository.find();
        return imagesDress;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }


}

export { ImageDressRepository }