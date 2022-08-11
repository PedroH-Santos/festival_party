import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllProductsWithPaginationUseCase } from "./ListAllProductsWithPaginationUseCase";

 



class ListAllProductsWithPaginationController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { page, search } = request.query;
        const listAllProductWithPaginationUseCase = container.resolve(ListAllProductsWithPaginationUseCase)
        const products = await listAllProductWithPaginationUseCase.execute({
            page: page as unknown as number,
            search: search as unknown as string,
        });
        return response.json(products);

    }
}

export {ListAllProductsWithPaginationController}