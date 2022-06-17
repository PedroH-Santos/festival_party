import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCategoriesDressesUseCase } from "./ListAllCategoriesDressesUseCase";





class ListAllCategoriesDressesController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllCategoriesDresses = container.resolve(ListAllCategoriesDressesUseCase)
        const categories = await listAllCategoriesDresses.execute();
        return response.json(categories);

    }
}

export {ListAllCategoriesDressesController}