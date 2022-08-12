
import { Client } from "@modules/client/infra/typeorm/entities/Client";
import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { IPaginationProvider } from "@shared/containers/providers/PaginationProvider/IPaginationProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
    page: number;
    search: string;
}
interface IResponse {
    clients: Client[],
    pagination: Pagination,
}


@injectable()
class ListClientWithPaginationUseCase {
    constructor(
        @inject("ClientRepository") 
        private clientRepository: IClientRepository,
        @inject("PaginationProvider")
        private paginationProvider: IPaginationProvider
    ){} 
    async execute({page,search}: IRequest): Promise<IResponse>{
        const count = await this.clientRepository.getCountAll(search);
        const clients = await this.clientRepository.getWithPagination(page,search);
        const pagination = this.paginationProvider.getPaginationData(count, page);
        const response: IResponse = {
            clients,
            pagination,
        }
        return response;
    } 
} 
 

export { ListClientWithPaginationUseCase }