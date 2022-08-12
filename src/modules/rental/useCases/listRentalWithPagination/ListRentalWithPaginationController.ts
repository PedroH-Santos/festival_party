
import {Request,Response} from "express";
import { container } from "tsyringe";
import { ListRentalWithPaginationUseCase } from "./ListRentalWithPaginationUseCase";



class ListRentalWithPaginationController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { start_date, expected_delivery_date,page } = request.query;
        const listRentalWithPaginationUseCase = container.resolve(ListRentalWithPaginationUseCase);
        const rentals = await listRentalWithPaginationUseCase.execute({
            start_date: start_date  as unknown as Date,  
            expected_delivery_date: expected_delivery_date as unknown as Date,
            page: page as unknown as number,
        });
        return response.status(201).json(rentals);
    }
}

export {ListRentalWithPaginationController}