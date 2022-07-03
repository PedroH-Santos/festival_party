import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateImageAccessoryUseCase } from './CreateImageAccessoryUseCase';

interface IFiles {
    filename: string;
}

class CreateImagesAccessoryController {

    async handle(request: Request, response: Response): Promise<Response> {
            const {accessory_id} = request.params;
            const images = request.files as IFiles[];
            const createImageAccessoryUseCase = container.resolve(CreateImageAccessoryUseCase);
            const imagesName = images.map(file => file.filename);
            await createImageAccessoryUseCase.execute({accessory_id,imagesName});
            return response.status(201).send();
    }

}

export {CreateImagesAccessoryController}