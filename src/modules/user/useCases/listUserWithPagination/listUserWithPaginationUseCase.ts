import { User } from "@modules/user/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { IPaginationProvider } from "@shared/containers/providers/PaginationProvider/IPaginationProvider";
import { inject, injectable } from "tsyringe";


interface IRequest {
    page: number;
    search: string;
}

interface IResponse {
    users: User[],
    pagination: Pagination,
}


@injectable()
class ListUserWithPaginationUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("PaginationProvider")
        private paginationProvider: IPaginationProvider
    ) { }
    async execute({ page,search }: IRequest): Promise<IResponse> {
        const count = await this.userRepository.getCountAll(search);
        const users = await this.userRepository.getWithPagination(page,search);
        const pagination = this.paginationProvider.getPaginationData(count, page);
        const response: IResponse = {
            users,
            pagination,
        }
        return response;
    }
}


export { ListUserWithPaginationUseCase }