
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'


@Entity("accessory_images")
class ImageAccessory {
    @PrimaryColumn()
    id: string;
    @Column()
    image: string;
    @Column()
    accessory_id: string; 
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export {ImageAccessory} 