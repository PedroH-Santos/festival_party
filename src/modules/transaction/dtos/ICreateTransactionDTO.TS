

interface ICreateTransactionDTO {
    id?: string;
    value: Number; 
    type: string;
    origin: string;
    description: string; 
    rental_id?: string;
}

export { ICreateTransactionDTO }