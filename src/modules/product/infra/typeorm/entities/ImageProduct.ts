
import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Product } from './Product';


@Entity("products_images")
class ImageProduct {
    @PrimaryColumn()
    id: string;
    @Column()
    image: string;
    @Column()
    product_id: string; 
    @ManyToOne(() => Product, product => product.images )
    @JoinColumn({name: "product_id"})
    product: Product;
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

export {ImageProduct} 