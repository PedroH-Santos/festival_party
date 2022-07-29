import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllImageProductUseCase } from "./ListAllImageProductUseCase";



class ListAllImageProductController { 

    async handle(request: Request, response: Response): Promise<Response> {
        const listAllImageProductUseCase = container.resolve(ListAllImageProductUseCase);
        const images = await listAllImageProductUseCase.execute();
        return response.json(images);

       
    }
}


export { ListAllImageProductController }