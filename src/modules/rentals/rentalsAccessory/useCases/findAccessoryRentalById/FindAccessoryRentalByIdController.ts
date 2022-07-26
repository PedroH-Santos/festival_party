import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAccessoryRentalByIdUseCase } from "./FindAccessoryRentalByIdUseCase";




class FindAccessoryRentalByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findRentalByIdUseCase = container.resolve(FindAccessoryRentalByIdUseCase)
        const rental = await findRentalByIdUseCase.execute({id});
        return response.json(rental);

    }
}

export {FindAccessoryRentalByIdController}