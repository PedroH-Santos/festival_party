
import { Product } from "@modules/product/infra/typeorm/entities/Product";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { IPaginationProvider } from "@shared/containers/providers/PaginationProvider/IPaginationProvider";
import { inject, injectable } from "tsyringe"


interface IRequest {
    page: number;
    search: string;
}

interface IResponse {
    products: Product[],
    pagination: Pagination,
}



@injectable()
class ListAllProductsWithPaginationUseCase {
    

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("PaginationProvider")
        private paginationProvider: IPaginationProvider
    ){} 

    async execute({ page,search }: IRequest): Promise<IResponse>{
        const count = await this.productRepository.getCountAll(search);
        const products = await this.productRepository.getWithPagination(page,search);
        const pagination = this.paginationProvider.getPaginationData(count, page);
        const response: IResponse = {
            products,
            pagination,
        }
        return response;
    }

}

export {ListAllProductsWithPaginationUseCase}