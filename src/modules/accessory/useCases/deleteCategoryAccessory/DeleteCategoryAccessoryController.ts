import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryAccessoryUseCase } from "./DeleteCategoryAccessoryUseCase";



class DeleteCategoryAccessoryController {


    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const deleteCategoryAccessoryUseCase = container.resolve(DeleteCategoryAccessoryUseCase);
        await deleteCategoryAccessoryUseCase.execute({id});
        return response.status(201).send()
    }
} 

export { DeleteCategoryAccessoryController } 