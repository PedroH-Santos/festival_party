

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDressUseCase } from './CreateDressUseCase';



class CreateDressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {categoryId, name , price} = request.body;
        
        const createDressUseCase = container.resolve(CreateDressUseCase);
        await createDressUseCase.execute({categoryId, name , price}); 
        return response.status(201).send();





    }
}
export { CreateDressController }; 
