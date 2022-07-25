import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterDressRentalAddClient1658752784656 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("dress_rentals",new TableColumn({
            name:"client_id",
            type:"uuid",
        }));
        await queryRunner.createForeignKey(
            "dress_rentals",
            new TableForeignKey({
                name: "FKClientDressRental",
                referencedTableName: "clients",
                referencedColumnNames: ["id"],
                columnNames: ["client_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("dress_rentals","FKClientDressRental");
        await queryRunner.dropColumn("dress_rentals","client_id");

    }

}
