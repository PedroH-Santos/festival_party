import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterAccessoryRentalAddClient1658758397763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("accessory_rentals",new TableColumn({
            name:"client_id",
            type:"uuid",
        }));
        await queryRunner.createForeignKey(
            "accessory_rentals",
            new TableForeignKey({
                name: "FKClientAccessoryRental",
                referencedTableName: "clients",
                referencedColumnNames: ["id"],
                columnNames: ["client_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("accessory_rentals","FKClientAccessoryRental");
        await queryRunner.dropColumn("dress_rentals","client_id");
    }

}
