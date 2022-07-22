
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListAccessoryRentalUseCase } from "./ListAccessoryRentalUseCase";



class ListAccessoryRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listAccessoryRentalUseCase = container.resolve(ListAccessoryRentalUseCase);
        const rentals = await listAccessoryRentalUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListAccessoryRentalController}