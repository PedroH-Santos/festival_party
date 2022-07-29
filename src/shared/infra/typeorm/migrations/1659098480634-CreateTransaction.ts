import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransaction1659098480634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "value",
                        type: "numeric"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "origin",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "rental_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    { 
                        name: "updated_at", 
                        type: "timestamp", 
                        default: "now()" 
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKRentalTransaction",
                        referencedTableName: "rentals",
                        referencedColumnNames: ["id"],
                        columnNames: ["rental_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions");
    }

}
