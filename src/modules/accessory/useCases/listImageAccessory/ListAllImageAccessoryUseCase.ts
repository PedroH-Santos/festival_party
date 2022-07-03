
import { ImageAccessory } from "@modules/accessory/infra/typeorm/entities/ImageAccessory";
import { IImageAccessoryRepository } from "@modules/accessory/repositories/IImageAccessoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllImageAccessoryUseCase {

    constructor(
        @inject("ImageAccessoryRepository")
        private imageAccessoryRepository: IImageAccessoryRepository
         
    ){}
    async execute(): Promise<ImageAccessory[]>{
        const images = await this.imageAccessoryRepository.getAll();
        return images;
    } 
}


export {ListAllImageAccessoryUseCase} 