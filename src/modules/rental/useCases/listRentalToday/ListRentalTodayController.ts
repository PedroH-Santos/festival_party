
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListRentalTodayUseCase } from "./ListRentalTodayUseCase";



class ListRentalTodayController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listRentalTodayUseCase = container.resolve(ListRentalTodayUseCase);
        const rentals = await listRentalTodayUseCase.execute();
        return response.status(201).json(rentals);
    }
}

export {ListRentalTodayController}