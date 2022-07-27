
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListAccessoryRentalFinishTodayUseCase } from "./ListAccessoryRentalFinishTodayUseCase";



class ListAccessoryRentalFinishTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listAccessoryRentalFinishTodayUseCase = container.resolve(ListAccessoryRentalFinishTodayUseCase);
        const rentals = await listAccessoryRentalFinishTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListAccessoryRentalFinishTodayController} 