import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCategoryAccessoryUseCase } from "./FindByIdCategoryAccessoryUseCase";





class FindByIdCategoryAccessoryController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findCategoryAccessoryByIdUseCase = container.resolve(FindByIdCategoryAccessoryUseCase)
        const accessory = await findCategoryAccessoryByIdUseCase.execute({id});
        return response.json(accessory);

    }
}

export {FindByIdCategoryAccessoryController}