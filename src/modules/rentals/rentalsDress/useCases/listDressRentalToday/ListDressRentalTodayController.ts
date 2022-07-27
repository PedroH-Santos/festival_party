
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListDressRentalTodayUseCase } from "./ListDressRentalTodayUseCase";



class ListDressRentalTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listDressRentalTodayUseCase = container.resolve(ListDressRentalTodayUseCase);
        const rentals = await listDressRentalTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListDressRentalTodayController}