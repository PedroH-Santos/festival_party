import {Request,Response} from "express";
import { container } from "tsyringe";
import { FinishedAccessoryRentalUseCase } from "./FinishedAccessoryRentalUseCase";


class FinishedAccessoryRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const finishedAccessoryRentalUseCase = container.resolve(FinishedAccessoryRentalUseCase);
        await finishedAccessoryRentalUseCase.execute(id);
        return response.status(201).send();
    }
}

export {FinishedAccessoryRentalController}