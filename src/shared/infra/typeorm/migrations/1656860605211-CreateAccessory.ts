import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccessory1656860605211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name: "accessory",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "numeric"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    { name: "updated_at", type: "timestamp", default: "now()" },
        
                ],
                foreignKeys: [
                    {
                        name: "FKAccessoryCategory",
                        referencedTableName: "accessory_categorys",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("accessory");
    }

}
