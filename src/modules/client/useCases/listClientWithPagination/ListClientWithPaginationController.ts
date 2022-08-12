import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientWithPaginationUseCase } from "./ListClientWithPaginationUseCase";



class ListClientWithPaginationController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { page, search } = request.query;
        const listClientWithPaginationUseCase = container.resolve(ListClientWithPaginationUseCase);
        const clients = await listClientWithPaginationUseCase.execute({
            page: page as unknown as number,
            search: search as unknown as string,
        });
        return response.json(clients);
    }
} 

export {ListClientWithPaginationController}