import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindDressRentalByIdUseCase } from "./FindDressRentalByIdUseCase";




class FindDressRentalByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findRentalByIdUseCase = container.resolve(FindDressRentalByIdUseCase)
        const rental = await findRentalByIdUseCase.execute({id});
        return response.json(rental);

    }
}

export {FindDressRentalByIdController}