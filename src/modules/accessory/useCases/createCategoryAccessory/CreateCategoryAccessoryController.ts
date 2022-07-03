

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryAccessoryUseCase } from './CreateCategoryAccessoryUseCase';


 
class CreateCategoryAccessoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name,id } = request.body;
        
        const createAccessoryUseCase = container.resolve(CreateCategoryAccessoryUseCase);
        await createAccessoryUseCase.execute({name,id}); 
        return response.status(201).send();





    }
}
export { CreateCategoryAccessoryController }; 
