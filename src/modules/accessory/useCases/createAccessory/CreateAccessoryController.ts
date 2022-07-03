

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAccessoryUseCase } from './CreateAccessoryUseCase';



class CreateAccessoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {category_id, name , price,id} = request.body;
        
        const createAccessoryUseCase = container.resolve(CreateAccessoryUseCase);
        await createAccessoryUseCase.execute({category_id, name , price,id}); 
        return response.status(201).send();





    }
}
export { CreateAccessoryController }; 
