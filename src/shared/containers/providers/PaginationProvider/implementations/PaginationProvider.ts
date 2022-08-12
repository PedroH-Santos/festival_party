import { IPaginationProvider } from "../IPaginationProvider";
import fs from 'fs';
import { resolve } from 'path';
import upload from "@config/upload";

class PaginationProvider implements IPaginationProvider {

    public getPaginationData(count: number, page: number): Pagination {
        return {
            page,
            totalCount: count,
            totalPages: Math.ceil(count / 10),
        }
    }

}

export { PaginationProvider }