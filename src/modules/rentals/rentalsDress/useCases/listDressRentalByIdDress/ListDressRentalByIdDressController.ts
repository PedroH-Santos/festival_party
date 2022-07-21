
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDressRentalByIdDressUseCase } from "./ListDressRentalByIdDressUseCase";



class ListDressRentalByIdDressController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { dress_id } = request.query;
        const listDressRentalByIdDressUseCase = container.resolve(ListDressRentalByIdDressUseCase);
        const rentals = await listDressRentalByIdDressUseCase.execute({
            dress_id: dress_id as string
        });
        return response.status(201).json(rentals);
    }
}

export { ListDressRentalByIdDressController }