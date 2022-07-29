
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRentalByIdProductUseCase } from "./ListRentalByIdProductUseCase";



class ListRentalByIdProductController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.query;
        const listRentalByIdProductUseCase = container.resolve(ListRentalByIdProductUseCase);
        const rentals = await listRentalByIdProductUseCase.execute({
            product_id: product_id as string
        });
        return response.status(201).json(rentals);
    }
}

export { ListRentalByIdProductController }