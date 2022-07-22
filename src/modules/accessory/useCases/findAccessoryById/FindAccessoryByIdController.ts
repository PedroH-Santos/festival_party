import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAccessoryByIdUseCase } from "./FindAccessoryByIdUseCase";





class FindAccessoryByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findAccessoryByIdUseCase = container.resolve(FindAccessoryByIdUseCase)
        const accessory = await findAccessoryByIdUseCase.execute({id});
        return response.json(accessory);

    } 
}

export {FindAccessoryByIdController}