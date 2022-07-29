import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";

 



class ListAllProductsController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllProductController = container.resolve(ListAllProductsUseCase)
        const products = await listAllProductController.execute();
        return response.json(products);

    }
}

export {ListAllProductsController}