import { MigrationInterface, QueryRunner } from "typeorm";

export class userSex1677172797148 implements MigrationInterface {
    name = 'userSex1677172797148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`sex\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`sex\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`sex\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`sex\` bit NULL`);
    }

}
