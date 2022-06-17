import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDressUseCase } from "./DeleteDressUseCase";


class DeleteDressController {


    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
    
        const deleteDressUseCase = container.resolve(DeleteDressUseCase);
        await deleteDressUseCase.execute({id});
        return response.status(201).send();
    }
}

export { DeleteDressController }