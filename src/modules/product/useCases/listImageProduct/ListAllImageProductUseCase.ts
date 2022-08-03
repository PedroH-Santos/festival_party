import { ImageProduct } from "@modules/product/infra/typeorm/entities/ImageProduct";
import { IImageProductRepository } from "@modules/product/repositories/IImageProductRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllImageProductUseCase {

    constructor(
        @inject("ImageProductRepository")
        private imageProductRepository: IImageProductRepository
         
    ){}
    async execute(): Promise<ImageProduct[]>{
        const images = await this.imageProductRepository.getAll();
        return images;
    } 
}


export {ListAllImageProductUseCase} 