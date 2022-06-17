import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";
import { IImageDressRepository } from "../../repositories/IImageDressRepository";
import { AppError } from "@shared/Errors/AppError";


interface IRequest{
    idDress: string;
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



    async execute({idDress,imagesName}: IRequest): Promise<void>  { 

        const dress = await this.dressRepository.getById(idDress);    
        if(!dress){
            throw new AppError("Vestido não encontrado !");  
        }

        imagesName.map(async (image) => {
            await this.imageDressRepository.create({idDress,image});
        })
    }
 
}


export {CreateImageDressUseCase}