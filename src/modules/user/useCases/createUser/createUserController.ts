import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";



class CreateUserController{

    async handle(request: Request,response:Response): Promise<Response>{
        const {id,name,email,password} = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const user = createUserUseCase.execute({id,name,email,password});
        return response.status(201).json(user);
    }
}

export {CreateUserController}