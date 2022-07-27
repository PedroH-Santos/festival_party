
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListDressRentalFinishTodayUseCase } from "./ListDressRentalFinishTodayUseCase";



class ListDressRentalFinishTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listDressRentalFinishTodayUseCase = container.resolve(ListDressRentalFinishTodayUseCase);
        const rentals = await listDressRentalFinishTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListDressRentalFinishTodayController} 