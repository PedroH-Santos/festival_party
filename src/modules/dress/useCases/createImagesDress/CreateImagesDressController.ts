import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateImageDressUseCase } from './CreateImageDressUseCase';

interface IFiles {
    filename: string;
}

class CreateImagesDressController {

    async handle(request: Request, response: Response): Promise<Response> {
            const {dress_id} = request.params;
            const images = request.files as IFiles[];
            const createImageDressUseCase = container.resolve(CreateImageDressUseCase);
            const imagesName = images.map(file => file.filename);
            await createImageDressUseCase.execute({dress_id,imagesName});
            return response.status(201).send();
    }

}

export {CreateImagesDressController}