import {Request,Response} from "express";
import { container } from "tsyringe";
import { DeleteDressRentalUseCase } from "./DeleteDressRentalUseCase";


class DeleteDressRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteDressRentalUseCase = container.resolve(DeleteDressRentalUseCase);
        await deleteDressRentalUseCase.execute(id);
        return response.status(201).send();
    }
}

export {DeleteDressRentalController}