








import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase";





class DeleteTransactionController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const deleteTransactionUseCase = container.resolve(DeleteTransactionUseCase);
        const transactions = await deleteTransactionUseCase.execute(id);
        return response.status(201).json(transactions);
    }
}

export { DeleteTransactionController }