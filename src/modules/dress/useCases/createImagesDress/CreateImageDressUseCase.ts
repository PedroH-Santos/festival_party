import { IDressRepository } from "@modules/dress/repositories/IDressRepository";
import { inject, injectable } from "tsyringe";
import { IImageDressRepository } from "../../repositories/IImageDressRepository";
import { AppError } from "@shared/Errors/AppError";
import { IStorageProvider } from "@shared/containers/providers/StorageProvider/IStorageProvider";


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
        @inject("StorageProvider")
        private storageProvider: IStorageProvider,
    ){}



    async execute({dress_id,imagesName}: IRequest): Promise<void>  { 

        const dress = await this.dressRepository.getById(dress_id);    
        if(!dress){
            throw new AppError("Vestido não encontrado !");  
        }

        const imageExist = await this.imageDressRepository.getByIdDress(dress_id);
        if(imageExist){
            await this.imageDressRepository.delete(imageExist.id);
            await this.storageProvider.delete(imageExist.image,"dress");
        }        
        imagesName.map(async (image) => {
            await this.storageProvider.save(image,'dress');
            await this.imageDressRepository.create({dress_id,image});
        });
    }
 
}


export {CreateImageDressUseCase}