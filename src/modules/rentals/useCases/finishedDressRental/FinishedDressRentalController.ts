import {Request,Response} from "express";
import { container } from "tsyringe";
import { FinishedDressRentalUseCase } from "./FinishedDressRentalUseCase";


class FinishedDressRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const finishedDressRentalUseCase = container.resolve(FinishedDressRentalUseCase);
        await finishedDressRentalUseCase.execute(id);
        return response.status(201).send();
    }
}

export {FinishedDressRentalController}