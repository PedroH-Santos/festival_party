import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";



class CreateClientController{

    async handle(request: Request,response:Response): Promise<Response>{
        const {id,name,email,phone} = request.body;
        const createClientUseCase = container.resolve(CreateClientUseCase);
        const client = createClientUseCase.execute({id,name,email,phone});
        return response.status(201).json(client);
    }
}

export {CreateClientController}