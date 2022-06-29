

interface ICreateTransactionDTO {
    id?: string;
    value: Number; 
    type: string;
    origin: string;
    description: string; 
}

export { ICreateTransactionDTO }