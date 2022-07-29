
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListRentalUseCase } from "./ListRentalUseCase";



class ListRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listRentalUseCase = container.resolve(ListRentalUseCase);
        const rentals = await listRentalUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListRentalController}