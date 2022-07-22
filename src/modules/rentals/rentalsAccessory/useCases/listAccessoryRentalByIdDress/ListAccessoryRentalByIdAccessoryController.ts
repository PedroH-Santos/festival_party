
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAccessoryRentalByIdAccessoryUseCase } from "./ListAccessoryRentalByIdAccessoryUseCase";



class ListAccessoryRentalByIdAccessoryController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { accessory_id } = request.query;
        const listAccessoryRentalByIdAccessoryUseCase = container.resolve(ListAccessoryRentalByIdAccessoryUseCase);
        const rentals = await listAccessoryRentalByIdAccessoryUseCase.execute({
            accessory_id: accessory_id as string
        });
        return response.status(201).json(rentals);
    }
}

export { ListAccessoryRentalByIdAccessoryController }