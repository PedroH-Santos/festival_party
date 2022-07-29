import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCategoriesProductsUseCase } from "./ListAllCategoriesProductsUseCase";





class ListAllCategoriesProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllCategoriesProductes = container.resolve(ListAllCategoriesProductsUseCase)
        const categories = await listAllCategoriesProductes.execute();
        return response.json(categories);

    }
}

export {ListAllCategoriesProductsController}