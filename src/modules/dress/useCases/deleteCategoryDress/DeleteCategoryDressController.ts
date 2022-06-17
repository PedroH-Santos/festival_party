import { Request, Response } from "express";
import { container } from "tsyringe";
import {DeleteCategoryDressUseCase} from './DeleteCategoryDressUseCase';



class DeleteCategoryDressController {


    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const deleteCategoryDressUseCase = container.resolve(DeleteCategoryDressUseCase);
        await deleteCategoryDressUseCase.execute({id});
        return response.status(201).send()
    }
}

export { DeleteCategoryDressController }