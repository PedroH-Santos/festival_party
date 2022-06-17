import { IImageDressRepository } from "@modules/dress/repositories/IImageDressRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    id: string;
}
@injectable()
class DeleteImageDressUseCase {

    constructor(
        @inject("ImageDressRepository")
        private imageDressRepository: IImageDressRepository
    ){}

    async execute({id}: IRequest) {
        await this.imageDressRepository.delete(id);
    }
}


export {DeleteImageDressUseCase}