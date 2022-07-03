import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteImageAccessoryUseCase } from "./DeleteImageAccessoryUseCase";



class DeleteImageAccessoryController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteImageAccessoryUseCase = container.resolve(DeleteImageAccessoryUseCase);
        await deleteImageAccessoryUseCase.execute({id});
        return response.status(201).send();
    }
}

export { DeleteImageAccessoryController }