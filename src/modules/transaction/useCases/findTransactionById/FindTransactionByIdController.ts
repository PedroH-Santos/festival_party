import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTransactionByIdUseCase } from "./FindTransactionByIdUseCase";





class FindTransactionByIdController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } =  request.params;
        const findTransactionByIdUseCase = container.resolve(FindTransactionByIdUseCase)
        const transaction = await findTransactionByIdUseCase.execute({id});
        return response.json(transaction);

    }
}

export {FindTransactionByIdController}