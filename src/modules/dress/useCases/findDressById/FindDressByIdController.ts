import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindDressByIdUseCase } from "./FindDressByIdUseCase";





class FindDressByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findDressByIdUseCase = container.resolve(FindDressByIdUseCase)
        const dress = await findDressByIdUseCase.execute({id});
        return response.json(dress);

    }
}

export {FindDressByIdController}