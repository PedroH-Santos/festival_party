








import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTransactionWithPaginationUseCase } from "./ListTransactionWithPaginationUseCase";





class ListTransactionWithPaginationController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { page , search} = request.query;
        const listTransactionWithPaginationUseCase = container.resolve(ListTransactionWithPaginationUseCase);
        const transactions = await listTransactionWithPaginationUseCase.execute({
            page: page as unknown as number,
            search: search as unknown as string,
        });
        return response.status(201).json(transactions);
    }
}

export { ListTransactionWithPaginationController }