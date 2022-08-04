import { IImageProductRepository } from "@modules/product/repositories/IImageProductRepository";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { IStorageProvider } from "@shared/containers/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider,
        @inject("ImageProductRepository")
        private imageProductRepository: IImageProductRepository,
    ) { }

    async execute({ id }: IRequest): Promise<void> {

        const imageExist = await this.imageProductRepository.getByIdProduct(id);
        await this.storageProvider.delete(imageExist.image, "product");

        await this.productRepository.delete(id);

    }

}


export { DeleteProductUseCase }