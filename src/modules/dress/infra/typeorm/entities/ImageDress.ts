
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Dress } from './Dress';


@Entity("dress_images")
class ImageDress {
    @PrimaryColumn()
    id: string;
    @Column()
    image: string;
    @Column()
    dress_id: string; 
    @ManyToOne(() => Dress, dress => dress.images )
    @JoinColumn({name: "dress_id"})
    dress: Dress;

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