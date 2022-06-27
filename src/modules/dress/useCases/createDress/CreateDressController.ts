

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDressUseCase } from './CreateDressUseCase';



class CreateDressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {category_id, name , price,id} = request.body;
        
        const createDressUseCase = container.resolve(CreateDressUseCase);
        await createDressUseCase.execute({category_id, name , price,id}); 
        return response.status(201).send();





    }
}
export { CreateDressController }; 
