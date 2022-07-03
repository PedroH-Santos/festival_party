import { inject, injectable } from "tsyringe";


import { IImageAccessoryRepository } from "@modules/accessory/repositories/IImageAccessoryRepository";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { AppError } from "@shared/Errors/AppError";


interface IRequest{
    accessory_id: string;
    imagesName: string[];
}



@injectable()
class CreateImageAccessoryUseCase { 
    constructor(
        @inject("ImageAccessoryRepository")
        private imageAccessoryRepository: IImageAccessoryRepository,
        @inject("AccessoryRepository")
        private accessoryRepository: IAccessoryRepository,
    ){}



    async execute({accessory_id,imagesName}: IRequest): Promise<void>  { 

        const accessory = await this.accessoryRepository.getById(accessory_id);    
        if(!accessory){
            throw new AppError("Accessório não encontrado !");  
        }

        imagesName.map(async (image) => {
            await this.imageAccessoryRepository.create({accessory_id,image});
        })
    }
 
}


export {CreateImageAccessoryUseCase}