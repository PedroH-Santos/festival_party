import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImageAccessory1656860851856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "accessory_images",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    {
                        name: "accessory_id",
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
                        name: "FKAccessoryImage",
                        referencedTableName: "accessory",
                        referencedColumnNames: ["id"],
                        columnNames: ["accessory_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("accessory_images");
    }

}
