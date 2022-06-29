








import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTransactionUseCase } from "./ListTransactionUseCase";





class ListTransactionController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listTransactionUseCase = container.resolve(ListTransactionUseCase);
        const transactions = await listTransactionUseCase.execute();
        return response.status(201).json(transactions);
    }
}

export { ListTransactionController }