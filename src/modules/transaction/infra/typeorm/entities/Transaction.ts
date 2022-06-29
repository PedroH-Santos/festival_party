import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';




@Entity("transactions")
class Transaction {
    @PrimaryColumn()
    id: string;
    @Column()
    description: string;
    @Column()
    value: number;
    @Column()
    type: string;
    @Column()
    origin: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();

        }
    }
    
}


export { Transaction }