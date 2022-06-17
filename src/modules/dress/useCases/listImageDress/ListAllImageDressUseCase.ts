import { ImageDress } from "@modules/dress/infra/typeorm/entities/ImageDress";
import { IImageDressRepository } from "@modules/dress/repositories/IImageDressRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllImageDressUseCase {

    constructor(
        @inject("ImageDressRepository")
        private imageDressRepository: IImageDressRepository
         
    ){}
    async execute(): Promise<ImageDress[]>{
        const images = await this.imageDressRepository.getAll();
        return images;
    } 
}


export {ListAllImageDressUseCase} 