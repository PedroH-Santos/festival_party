

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryDressUseCase } from './CreateCategoryDressUseCase';



class CreateCategoryDressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        
        const createDressUseCase = container.resolve(CreateCategoryDressUseCase);
        await createDressUseCase.execute({name}); 
        return response.status(201).send();





    }
}
export { CreateCategoryDressController }; 
