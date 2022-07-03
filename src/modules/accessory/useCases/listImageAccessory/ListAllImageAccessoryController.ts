import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllImageAccessoryUseCase } from "./ListAllImageAccessoryUseCase";



class ListAllImageAccessoryController { 

    async handle(request: Request, response: Response): Promise<Response> {
        const listAllImageAccessoryUseCase = container.resolve(ListAllImageAccessoryUseCase);
        const images = await listAllImageAccessoryUseCase.execute();
        return response.json(images);

       
    }
}


export { ListAllImageAccessoryController }