import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientUseCase } from "./ListClientUseCase";



class ListClientController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listClientUseCase = container.resolve(ListClientUseCase);
        const clients = await listClientUseCase.execute();
        return response.json(clients);
    }
} 

export {ListClientController}