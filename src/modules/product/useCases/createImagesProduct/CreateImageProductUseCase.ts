import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";
import { IImageProductRepository } from "../../repositories/IImageProductRepository";
import { AppError } from "@shared/Errors/AppError";
import { IStorageProvider } from "@shared/containers/providers/StorageProvider/IStorageProvider";


interface IRequest{
    product_id: string;
    imagesName: string[];
}



@injectable()
class CreateImageProductUseCase {
    constructor(
        @inject("ImageProductRepository")
        private imageProductRepository: IImageProductRepository,
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider,
    ){}



    async execute({product_id,imagesName}: IRequest): Promise<void>  { 

        const product = await this.productRepository.getById(product_id);    
        if(!product){
            throw new AppError("Vestido não encontrado !");  
        }

        const imageExist = await this.imageProductRepository.getByIdProduct(product_id);
        if(imageExist){
            await this.imageProductRepository.delete(imageExist.id);
            await this.storageProvider.delete(imageExist.image,"product");
        }        
        imagesName.map(async (image) => {
            await this.storageProvider.save(image,'product');
            await this.imageProductRepository.create({product_id,image});
        });
    }
 
}


export {CreateImageProductUseCase}