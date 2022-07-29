import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindRentalByIdUseCase } from "./FindRentalByIdUseCase";




class FindRentalByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findRentalByIdUseCase = container.resolve(FindRentalByIdUseCase)
        const rental = await findRentalByIdUseCase.execute({id});
        return response.json(rental);

    }
}

export {FindRentalByIdController}