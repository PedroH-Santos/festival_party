import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllDressesUseCase } from "./ListAllDressesUseCase";





class ListAllDressesController {

    async handle(request: Request, response: Response): Promise<Response>{
        const listAllDressController = container.resolve(ListAllDressesUseCase)
        const dresses = await listAllDressController.execute();
        return response.json(dresses);

    }
}

export {ListAllDressesController}