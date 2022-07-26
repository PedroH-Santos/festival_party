import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCategoryDressUseCase } from "./FindByIdCategoryDressUseCase";





class FindByIdCategoryDressController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findCategoryDressByIdUseCase = container.resolve(FindByIdCategoryDressUseCase)
        const dress = await findCategoryDressByIdUseCase.execute({id});
        return response.json(dress);

    }
}

export {FindByIdCategoryDressController}