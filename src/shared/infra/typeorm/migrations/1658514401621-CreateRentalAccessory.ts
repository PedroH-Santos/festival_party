import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRentalAccessory1658514401621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "accessory_rentals",
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
                        name: "accessory_id",
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
                        name: "FKAccessoryRental",
                        referencedTableName: "accessory",
                        referencedColumnNames: ["id"],
                        columnNames: ["accessory_id"],
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
        await queryRunner.dropTable("accessory_rentals");
    }

}
