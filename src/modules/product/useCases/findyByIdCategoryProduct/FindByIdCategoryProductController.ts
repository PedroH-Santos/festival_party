import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCategoryProductUseCase } from "./FindByIdCategoryProductUseCase";





class FindByIdCategoryProductController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findCategoryProductByIdUseCase = container.resolve(FindByIdCategoryProductUseCase)
        const category = await findCategoryProductByIdUseCase.execute({id});
        return response.json(category);

    }
}

export {FindByIdCategoryProductController}