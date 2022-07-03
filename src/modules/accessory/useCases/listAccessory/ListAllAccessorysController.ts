import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllAccessorysUseCase } from "./ListAllAccessorysUseCase";





class ListAllAccessorysController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllCategorysAccessoryUseCase = container.resolve(ListAllAccessorysUseCase)
        const accessorys = await listAllCategorysAccessoryUseCase.execute();
        return response.json(accessorys);

    }
}

export {ListAllAccessorysController}