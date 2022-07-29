import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateImageProductUseCase } from './CreateImageProductUseCase';

interface IFiles {
    filename: string;
}

class CreateImagesProductController {

    async handle(request: Request, response: Response): Promise<Response> {
            const {product_id} = request.params;
            const images = request.files as IFiles[];
            const createImageProductUseCase = container.resolve(CreateImageProductUseCase);
            const imagesName = images.map(file => file.filename);
            await createImageProductUseCase.execute({product_id,imagesName});
            return response.status(201).send();
    }

}

export {CreateImagesProductController}