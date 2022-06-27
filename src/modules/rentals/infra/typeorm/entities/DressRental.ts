
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid';




@Entity("dress_rentals")
class DressRental {
    @PrimaryColumn()
    id: string;
    @Column()
    value: Number;
    @Column()
    description: string;
    @Column()
    start_date: Date;
    @Column()
    end_date: Date;
    @Column()
    expected_delivery_date: Date;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    dress_id: string;
    @Column()
    user_id: string;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();

        }
    }
}



export { DressRental }