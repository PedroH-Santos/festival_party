
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListAccessoryRentalTodayUseCase } from "./ListAccessoryRentalTodayUseCase";



class ListAccessoryRentalTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listAccessoryRentalTodayUseCase = container.resolve(ListAccessoryRentalTodayUseCase);
        const rentals = await listAccessoryRentalTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListAccessoryRentalTodayController} 