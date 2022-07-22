import {Request,Response} from "express";
import { container } from "tsyringe";
import { DeleteAccessoryRentalUseCase } from "./DeleteAccessoryRentalUseCase";


class DeleteAccessoryRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteAccessoryRentalUseCase = container.resolve(DeleteAccessoryRentalUseCase);
        await deleteAccessoryRentalUseCase.execute(id);
        return response.status(201).send();
    }
}

export {DeleteAccessoryRentalController}