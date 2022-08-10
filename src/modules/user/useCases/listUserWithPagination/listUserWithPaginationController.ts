import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserWithPaginationUseCase } from "./listUserWithPaginationUseCase";



class ListUserWithPaginationController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { page, search } = request.query;
        const listUserWithPaginationUseCase = container.resolve(ListUserWithPaginationUseCase);
        const users = await listUserWithPaginationUseCase.execute({
            page: page as unknown as number,
            search: search as unknown as string,
        });
        return response.json(users);
    }
} 

export {ListUserWithPaginationController}