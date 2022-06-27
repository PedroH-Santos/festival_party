import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDressRentals1656350906279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dress_rentals",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "value",
                        type: "numeric",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "start_date",
                        type: "timestamp",
                    },
                    {
                        name: "end_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "expected_delivery_date",
                        type: "timestamp",
                    },
                    {
                        name: "dress_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "user_id",
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
                        name: "FKDressRental",
                        referencedTableName: "dress",
                        referencedColumnNames: ["id"],
                        columnNames: ["dress_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserRental",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dress_rentals");
    }

}
