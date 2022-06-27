import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";



class CreateUserController{

    async handle(request: Request,response:Response): Promise<Response>{
        const {id,name,email} = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const user = createUserUseCase.execute({id,name,email});
        return response.status(201).json(user);
    }
}

export {CreateUserController}