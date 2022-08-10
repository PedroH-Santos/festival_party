

interface IPaginationProvider {
    getPaginationData(count: number, page: number): Pagination
}


export { IPaginationProvider } 