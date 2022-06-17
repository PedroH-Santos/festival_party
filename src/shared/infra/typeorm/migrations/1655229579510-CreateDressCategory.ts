import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDressCategory1655229579510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dress_categorys",
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
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    { name: "updatedAt", type: "timestamp", default: "now()" },

                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dress_categorys");
    }


}
