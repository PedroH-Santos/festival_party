import { Request, Response } from "express";
import { container } from "tsyringe";
import {DeleteCategoryProductUseCase} from './DeleteCategoryProductUseCase';



class DeleteCategoryProductController {


    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const deleteCategoryProductUseCase = container.resolve(DeleteCategoryProductUseCase);
        await deleteCategoryProductUseCase.execute({id});
        return response.status(201).send()
    }
}

export { DeleteCategoryProductController }