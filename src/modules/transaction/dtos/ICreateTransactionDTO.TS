

interface ICreateTransactionDTO {
    id?: string;
    value: number;
    type: string;
    origin: string;
}

export { ICreateTransactionDTO }