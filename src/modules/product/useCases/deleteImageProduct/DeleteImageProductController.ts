import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteImageProductUseCase } from "./DeleteImageProductUseCase";



class DeleteImageProductController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteImageProductUseCase = container.resolve(DeleteImageProductUseCase);
        await deleteImageProductUseCase.execute({id});
        return response.status(201).send();
    }
}

export { DeleteImageProductController }