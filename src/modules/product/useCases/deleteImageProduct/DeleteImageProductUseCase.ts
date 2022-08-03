import { IImageProductRepository } from "@modules/product/repositories/IImageProductRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
}
@injectable()
class DeleteImageProductUseCase {

    constructor(
        @inject("ImageProductRepository")
        private imageProductRepository: IImageProductRepository
    ){}

    async execute({id}: IRequest) {
        await this.imageProductRepository.delete(id);
    }
}


export {DeleteImageProductUseCase}