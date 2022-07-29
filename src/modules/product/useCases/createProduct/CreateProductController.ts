

import { AppError } from '@shared/Errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductUseCase } from './CreateProductUseCase';


 
class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {

        const {category_id, name , price,id} = request.body;
        
        const createProductUseCase = container.resolve(CreateProductUseCase);
        const product = await createProductUseCase.execute({category_id, name , price,id}); 
        return response.status(201).json(product);





    }
}
export { CreateProductController }; 
