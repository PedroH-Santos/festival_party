import { Rental } from "@modules/rental/infra/typeorm/entities/Rental";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';




@Entity("transactions")
class Transaction {
    @PrimaryColumn()
    id: string;
    @Column()
    description: string;
    @Column()
    value: Number;
    @Column()
    type: string;
    @Column()
    origin: string;
    @Column()
    rental_id: string;
    @ManyToOne(() => (Rental) )
    @JoinColumn({name: "rental_id"})
    rental: Rental; 
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