import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";
import { IImageDressRepository } from "../../repositories/IImageDressRepository";
import { AppError } from "@shared/Errors/AppError";


interface IRequest{
    dress_id: string;
    imagesName: string[];
}



@injectable()
class CreateImageDressUseCase {
    constructor(
        @inject("ImageDressRepository")
        private imageDressRepository: IImageDressRepository,
        @inject("DressRepository")
        private dressRepository: IDressRepository,
    ){}



    async execute({dress_id,imagesName}: IRequest): Promise<void>  { 

        const dress = await this.dressRepository.getById(dress_id);    
        if(!dress){
            throw new AppError("Vestido não encontrado !");  
        }

        imagesName.map(async (image) => {
            await this.imageDressRepository.create({dress_id,image});
        })
    }
 
}


export {CreateImageDressUseCase}