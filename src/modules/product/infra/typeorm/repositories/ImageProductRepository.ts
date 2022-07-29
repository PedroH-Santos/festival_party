import { getRepository, Repository } from "typeorm";
import { ImageProduct } from "../entities/ImageProduct";
import {IImageProductRepository} from "../../../repositories/IImageProductRepository";
import { ICreateImageProductDTO } from "../../../dtos/ICreateImageProductDTO";

class ImageProductRepository implements IImageProductRepository {
    private repository: Repository<ImageProduct>;
    constructor(){
        this.repository = getRepository(ImageProduct);
    }

    async create({ image, product_id }: ICreateImageProductDTO): Promise<ImageProduct> {
       const imageProduct = this.repository.create({image,product_id});
       await this.repository.save(imageProduct);
       return imageProduct;

    }

    async getByIdProduct(product_id: string): Promise<ImageProduct>{
        const imagesProduct = this.repository.findOne({
            where: { product_id}
        });
        return imagesProduct;

    }

    async getAll(): Promise<ImageProduct[]> {
        const imagesProduct = this.repository.find();
        return imagesProduct;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }


}

export { ImageProductRepository }