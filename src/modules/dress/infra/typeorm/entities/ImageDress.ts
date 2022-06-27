
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'


@Entity("dress_images")
class ImageDress {
    @PrimaryColumn()
    id: string;
    @Column()
    image: string;
    @Column()
    dress_id: string; 
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

export {ImageDress} 