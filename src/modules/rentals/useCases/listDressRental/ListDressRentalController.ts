
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListDressRentalUseCase } from "./ListDressRentalUseCase";



class ListDressRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listDressRentalUseCase = container.resolve(ListDressRentalUseCase);
        const rentals = await listDressRentalUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListDressRentalController}