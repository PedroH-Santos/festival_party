import { IImageAccessoryRepository } from "@modules/accessory/repositories/IImageAccessoryRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
}
@injectable()
class DeleteImageAccessoryUseCase {

    constructor(
        @inject("ImageAccessoryRepository")
        private imageAccessoryRepository: IImageAccessoryRepository
    ){}

    async execute({id}: IRequest) {
        await this.imageAccessoryRepository.delete(id);
    }
}


export {DeleteImageAccessoryUseCase}