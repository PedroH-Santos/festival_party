import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteImageDressUseCase } from "./DeleteImageDressUseCase";



class DeleteImageDressController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteImageDressUseCase = container.resolve(DeleteImageDressUseCase);
        await deleteImageDressUseCase.execute({id});
        return response.status(201).send();
    }
}

export { DeleteImageDressController }