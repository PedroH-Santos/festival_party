import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCategoriesAccessorysUseCase } from "./ListAllCategoriesAccessorysUseCase";





class ListAllCategoriesAccessorysController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllCategoriesAccessorys = container.resolve(ListAllCategoriesAccessorysUseCase)
        const categories = await listAllCategoriesAccessorys.execute();
        return response.json(categories);

    }
}

export {ListAllCategoriesAccessorysController}