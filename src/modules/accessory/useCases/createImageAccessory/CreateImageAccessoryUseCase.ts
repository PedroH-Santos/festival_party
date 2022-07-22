import { inject, injectable } from "tsyringe";


import { IImageAccessoryRepository } from "@modules/accessory/repositories/IImageAccessoryRepository";
import { IAccessoryRepository } from "@modules/accessory/repositories/IAccessoryRepository";
import { AppError } from "@shared/Errors/AppError";
import { IStorageProvider } from "@shared/containers/providers/StorageProvider/IStorageProvider";


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
        @inject("StorageProvider")
        private storageProvider: IStorageProvider,
    ){}



    async execute({accessory_id,imagesName}: IRequest): Promise<void>  { 

        const accessory = await this.accessoryRepository.getById(accessory_id);    
        if(!accessory){
            throw new AppError("Accessório não encontrado !");  
        }
        const imageExist = await this.imageAccessoryRepository.getByIdAccessory(accessory_id);
        if(imageExist){
            await this.imageAccessoryRepository.delete(imageExist.id);
            await this.storageProvider.delete(imageExist.image,"accessory");
        }    
        imagesName.map(async (image) => {
            await this.storageProvider.save(image,'accessory');
            await this.imageAccessoryRepository.create({accessory_id,image});
        })
    }
 
}


export {CreateImageAccessoryUseCase}