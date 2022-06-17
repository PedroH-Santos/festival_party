import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImageDress1655295903723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dress_images",
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
                        name: "idDress",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    { name: "updatedAt", type: "timestamp", default: "now()" },

                ],
                foreignKeys: [
                    {
                        name: "FKDressImage",
                        referencedTableName: "dress",
                        referencedColumnNames: ["id"],
                        columnNames: ["idDress"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dress_images");
    }

}
