

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryProductUseCase } from './CreateCategoryProductUseCase';



class CreateCategoryProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name,id } = request.body;
        
        const createProductUseCase = container.resolve(CreateCategoryProductUseCase);
        await createProductUseCase.execute({name,id}); 
        return response.status(201).send();





    }
}
export { CreateCategoryProductController }; 
