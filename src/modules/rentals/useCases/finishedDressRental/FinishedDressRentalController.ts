import {Request,Response} from "express";
import { container } from "tsyringe";
import { FinishedDressRentalUseCase } from "./FinishedDressRentalUseCase";


class FinishedDressRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const finishedDressRentalController = container.resolve(FinishedDressRentalUseCase);
        await finishedDressRentalController.execute(id);
        return response.status(201).send();
    }
}

export {FinishedDressRentalController}