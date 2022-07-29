
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListRentalFinishTodayUseCase } from "./ListRentalFinishTodayUseCase";



class ListRentalFinishTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listRentalFinishTodayUseCase = container.resolve(ListRentalFinishTodayUseCase);
        const rentals = await listRentalFinishTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListRentalFinishTodayController} 