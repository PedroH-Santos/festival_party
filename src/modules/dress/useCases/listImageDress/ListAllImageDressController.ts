import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllImageDressUseCase } from "./ListAllImageDressUseCase";



class ListAllImageDressController { 

    async handle(request: Request, response: Response): Promise<Response> {
        const listAllImageDressUseCase = container.resolve(ListAllImageDressUseCase);
        const images = await listAllImageDressUseCase.execute();
        return response.json(images);

       
    }
}


export { ListAllImageDressController }