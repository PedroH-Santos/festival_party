import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAccessoryUseCase } from "./DeleteAccessoryUseCase";


class DeleteAccessoryController {


    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
    
        const deleteAccessoryUseCase = container.resolve(DeleteAccessoryUseCase);
        await deleteAccessoryUseCase.execute({id});
        return response.status(201).send();
    }
}

export { DeleteAccessoryController }